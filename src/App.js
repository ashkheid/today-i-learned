import { func } from 'prop-types';
import './style.css';

function App() {
	return (
		<>
			<Header />
			<NewFactForm />

			<main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
		</>
	);
}

function Header() {
	const appTitle = 'Today I Learned';

	return (
		<header className='header'>
			<div className='logo'>
				<img src='logo.png' height='68' width='68' alt='Today I Learned Logo' />
				<h1>{appTitle}</h1>
			</div>

			<button className='btn btn-large btn-open'>Share a fact</button>
		</header>
	);
}

function NewFactForm() {
	return <form className='fact-form'>Fact Form</form>;
}

function CategoryFilter() {
	return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}

export default App;
