import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Main = () => {

	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1 className="main-head" onClick={() => navigate("/")}>QUIZ</h1>
				<div>
				<button className={styles.white_btn2} onClick={handleLogout}>
					Logout
				</button>
				<button className={styles.white_btn} onClick={() => navigate("/profile")}>
					Profile
				</button>
				</div>
			</nav>
		</div>
	);
};

export default Main;