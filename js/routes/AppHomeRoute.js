import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    allPeople: () => Relay.QL`
      query {
        allPeople
      }
    `,
  };

  static routeName = 'AppHomeRoute';
}
