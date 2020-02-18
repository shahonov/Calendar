import * as React from 'react';
import { Calendar } from './components/Calendar';

export class App extends React.PureComponent {
  public render(): React.ReactNode {
    return (
        <Calendar />
    )
  }
}