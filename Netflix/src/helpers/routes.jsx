
// import { RedirectFunction } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (!user) {
//           return children;
//         }

//         if (user) {
//           return (
//             <RedirectFunction
//               to={{
//                 pathname: loggedInPath,
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }

// export function ProtectedRoute({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user) {
//           return children;
//         }

//         if (!user) {
//           return (
//             <RedirectFunction
//               to={{
//                 pathname: 'signin',
//                 state: { from: location },
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }