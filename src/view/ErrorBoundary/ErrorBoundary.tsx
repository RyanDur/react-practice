import * as React from 'react';
import {Component, ErrorInfo} from 'react';

interface ErrorBoundaryProps {
  error: Error;
  info: ErrorInfo;
  setError: (error: Error, info: ErrorInfo) => void;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.setError(error, info);
  }

  render() {
    if (this.props.error) {
      return <>
        <h1>{this.props.error.message}</h1>
        {this.props.info.componentStack.split('in').map(stack => <div key={stack}>{`in ${stack}`}</div>)}
      </>;
    }

    return this.props.children;
  }
}
