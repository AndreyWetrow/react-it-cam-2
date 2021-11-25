import Navbar from "./Navbar";
import { connect } from "react-redux";

// const NavbarContainer = ( ) => {
//
//   return (
//     <div className={classes.nav}>
//       <nav>
//         <ul>
//           <li className={classes.item}>
//             <NavLink className={activeLink()} to="/profile">
//               Profile
//             </NavLink>
//           </li>
//           <li className={classes.item}>
//             <NavLink className={activeLink()} to="/dialogs">
//               Messages
//             </NavLink>
//           </li>
//           <li className={classes.item}>
//             <NavLink to="/news">News</NavLink>
//           </li>
//           <li className={classes.item}>
//             <NavLink to="/music">Music</NavLink>
//           </li>
//           <li className={classes.item}>
//             <NavLink to="/settings">Settings</NavLink>
//           </li>
//         </ul>
//         <Friends state={state} />
//       </nav>
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar.friends,
  };
};

const SurerNavbarContainer = connect(mapStateToProps)(Navbar);

export default SurerNavbarContainer;
