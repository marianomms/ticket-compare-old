import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getThings } from '../actions';
import RecordStateApp from '../types/record-state-app';
import RecordThing from '../types/record-thing';

interface IOwnProps {
  greeting: string;
}

interface IStateProps {
  things: List<RecordThing>;
}

const mapDispatchToProps = { getThings };

type Props = IOwnProps & IStateProps & typeof mapDispatchToProps;

const HelloWorld: React.FunctionComponent<Props> = (props: Props) => {
  const thingsList = props.things.map((t) => {
    return <li key={ t.guid }>{ `${t.name} - ${t.guid}` }</li>;
  });
  return (
    <>
      <div>Hello desde typescript { props.greeting }!</div>
      <button
        className='getThingsBtn'
        onClick={ () => props.getThings() }
        type='button'
      >
        getThings
      </button>
      <br />
      <ul>{ thingsList }</ul>
    </>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  things: (state) => state.get('thingsState').things
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
