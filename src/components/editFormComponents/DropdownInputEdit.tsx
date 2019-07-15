import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import OptionsComponent from './OptionsEdit';
import { updateComponent } from '../../actions/form';
import '../../styles/components.scss';

interface Props {
  id: string;
  settings: {
    question: string;
  },
  type: string;
  updateComponent: (id:string, update: { question?: string }) => void;
}

class DropdownInputEdit extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }
  handleQuestionChange(e: React.ChangeEvent<{ value: string }>) {
    const { id, updateComponent } = this.props;
    const newValue = e.target.value;
    updateComponent(id, { question: newValue });
  }
  render() {
    const { settings: { question } } = this.props;
    return (
      <div className="text-component-container">
        <FormControl className="value-field">
          <TextField
            label="Question"
            placeholder="Question"
            value={question}
            onChange={this.handleQuestionChange}
            margin="normal"
          />
        </FormControl>
        <OptionsComponent {...this.props} />
      </div>
    )
  }
}

export default connect(
  null,
  { updateComponent }
)(DropdownInputEdit);
