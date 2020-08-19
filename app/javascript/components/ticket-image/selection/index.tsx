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
import { DatePicker } from '@material-ui/pickers';

import { initDebug } from 'app/common/debug';
import { RecordTicket } from 'app/types/record-ticket';
import { createStructuredSelector } from 'reselect';
import RecordStateApp from 'app/types/record-state-app';
import { setSelectionStep, setSelectionDate } from 'app/actions/ticket';
import SelectionStep from 'app/types/enums';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DateType } from '@date-io/type';

const debug = initDebug('components/ticket/selection/index.tsx');

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
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
  selectionDate: DateType;
}

const mapDispatchToProps = { setSelectionStep, setSelectionDate };

type Props = IStateProps & typeof mapDispatchToProps;

const Selection: React.FunctionComponent<Props> = (props: Props) => {
  debug('Render Component: Selection');

  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    props.setSelectionStep(props.selectionStep + 1);
  };

  const handleReset = () => {
    props.setSelectionStep(SelectionStep.market);
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (!date) {
      return;
    }
    props.setSelectionDate(date);
  };

  return (
    <div className={ classes.root }>
      <DatePicker
        autoOk
        disableFuture
        disableToolbar
        format='DD/MM/yyyy'
        label='Fecha de compra'
        onChange={ handleDateChange }
        value={ props.selectionDate }
        variant='inline'
      />
      <Stepper
        activeStep={ props.selectionStep }
        orientation='vertical'
      >
        { steps.map((label, index) => (
          <Step key={ label }>
            <StepLabel>{ label }</StepLabel>
            <StepContent>
              <Typography>{ getStepContent(index) }</Typography>
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
          <Typography>Todas las áreas selecionadas. Casi hemos terminado.</Typography>
          <div>
            <Button onClick={ handleReset } className={ classes.button }>
              Reset
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={ handleNext }
              className={ classes.button }
            >
              Finalizar
            </Button>
          </div>
        </Paper>
      ) }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  ticket: (state) => state.get('ticketState').ticket,
  ticketId: (state) => state.get('ticketState').ticketId,
  selectionStep: (state) => state.get('ticketState').selectionStep,
  selectionDate: (state) => state.get('ticketState').selectionDate
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
