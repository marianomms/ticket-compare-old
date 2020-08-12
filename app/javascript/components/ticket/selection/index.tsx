import React from 'react';
import { connect } from 'react-redux';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { initDebug } from 'app/common/debug';
import { RecordTicket } from 'app/types/record-ticket';
import { createStructuredSelector } from 'reselect';
import RecordStateApp from 'app/types/record-state-app';
import { setSelectionStep } from 'app/actions/ticket';
import SelectionStep from 'app/types/enums';

const debug = initDebug('components/ticket/selection/index.tsx');

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ['Seleccionar comercio', 'Seleccionar columna de artículos', 'Seleccionar columna de precios'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Selecciona el área que contine el nombre del comercio.';
    case 1:
      return 'Selecciona el área que contiene los artículos.';
    case 2:
      return 'Selecciona el área que contiene los precios.';
    default:
      return 'Unknown step';
  }
}

interface IStateProps {
  ticket: RecordTicket;
  ticketId: string;
  selectionStep: SelectionStep;
}

const mapDispatchToProps = { setSelectionStep };

type Props = IStateProps & typeof mapDispatchToProps;

const Selection: React.FunctionComponent<Props> = (props: Props) => {
  debug('Render Component: Selection');

  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    props.setSelectionStep(props.selectionStep + 1);
  };

  const handleBack = () => {
    props.setSelectionStep(props.selectionStep - 1);
  };

  const handleReset = () => {
    props.setSelectionStep(SelectionStep.market);
  };

  return (
    <div className={ classes.root }>
      <Stepper
        activeStep={ props.selectionStep }
        orientation='vertical'
      >
        { steps.map((label, index) => (
          <Step key={ label }>
            <StepLabel>{ label }</StepLabel>
            <StepContent>
              <Typography>{ getStepContent(index) }</Typography>
              <div className={ classes.actionsContainer }>
                <div>
                  <Button
                    disabled={ props.selectionStep === 0 }
                    onClick={ handleBack }
                    className={ classes.button }
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={ handleNext }
                    className={ classes.button }
                  >
                    { props.selectionStep === steps.length - 1 ? 'Finish' : 'Next' }
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        )) }
      </Stepper>
      { props.selectionStep === steps.length && (
        <Paper
          square
          elevation={ 0 }
          className={ classes.resetContainer }
        >
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={ handleReset } className={ classes.button }>
            Reset
          </Button>
        </Paper>
      ) }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  ticket: (state) => state.get('ticketState').ticket,
  ticketId: (state) => state.get('ticketState').ticketId,
  selectionStep: (state) => state.get('ticketState').selectionStep
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
