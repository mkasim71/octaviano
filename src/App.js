import "./styles.css";

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        )
    }
}

export default function App() {
  return (
    <div className="App">
        <Header/>
        <h1>Testing</h1>
    </div>
  );
}
