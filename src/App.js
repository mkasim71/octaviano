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

export default function App() {
  return (
    <div className="App">
        <Content/>
    </div>
  );
}
