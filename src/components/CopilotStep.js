// @flow
import { Component, createElement } from 'react';

import { AppCopilotContext } from '../hocs/copilot';
import ConnectedCopilotStep from './ConnectedCopilotStep';

type Props = {
  name: string,
  order: number, // eslint-disable-line react/no-unused-prop-types
  text: string, // eslint-disable-line react/no-unused-prop-types
};

class CopilotStep extends Component<Props> {
  render() {
    const currentStep = this.context._copilot.getCurrentStep();

    return createElement(
      ConnectedCopilotStep,
      {
        ...this.props,
        _copilot: this.context._copilot,
        visible: currentStep && currentStep.name === this.props.name,
      },
    );
  }
}
CopilotStep.contextType = AppCopilotContext;

export default CopilotStep;
