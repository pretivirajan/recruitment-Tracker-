import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom' 
import React from "react";
import './App.css';
const NavigationBar = ({ className }) => (
    <div className={className}>
      <NavigationBarSection>
        <NavigationTitle to="/">
          <ReactSVG path={ipmLogoUrl} style={{ width: 24 }} />
        </NavigationTitle>
        <NavigationItem exact to="/">
          Import
        </NavigationItem>
        <NavigationItem to="/timephase">Timephase</NavigationItem>
        <NavigationItem to="/sync-progress">Sync Progress</NavigationItem>
        <NavigationItem to="/parameters">Parameters</NavigationItem>
      </NavigationBarSection>
      <div>I want to display message from API</div>
      <NavigationBarSection>
        <Dropdown
          label={
            <BlockNavigationItem>
              <Icon icon={<Help />} />
            </BlockNavigationItem>
          }
        >
          <DropdownItem
            target="_blank"
            href="/api/replenishment-parameters/keycode-parameters-template"
          >
            Download D&F Keycode Template
          </DropdownItem>
          <DropdownItem
            target="_blank"
            href="/api/replenishment-parameters/sims-keycode-parameters-template"
          >
            Download SIMS Keycode Template
          </DropdownItem>
          <DropdownItem
            target="_blank"
            href="/api/replenishment-parameters/timephase-template"
          >
            Download Timephase Template
          </DropdownItem>
          <DropdownItem
            rel="noopener noreferrer"
            target="_blank"
            href="https://kmartonline.atlassian.net/wiki/x/5ICICg"
          >
            Help and Support
          </DropdownItem>
        </Dropdown>
  
        <UserProfile />
      </NavigationBarSection>
    </div>
  );
'use strict';
<header>
fetch('https://myapi.com', { method: 'POST', headers: { accept: 'application/json', body: JSON.stringify({ message: 'Hello World!' }) } })
</header>
function callApi() {
    fetch('http://localhost:3001/fake', { method: 'GET' })
      .then(response => alert(response.status))
  }
  function callApi() {
    fetch('http://localhost:3001/fake', { method: 'GET' })
      .then(response => alert(response.headers.get('content-type')))
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 componentDidMount() {
//     // get all entities - GET
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         friends: response
//       })
//     })
//     .catch(err => { console.log(err); 
//     });
   }

  create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        name: this.state.name,
        notes: this.state.notes
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  update(e) {
    // update entity - PUT
    e.preventDefault();

    // this will update entries with PUT
    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
        "method": "PUT",
        "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify({
            _id: this.state.id,
            name: this.state.name,
            notes: this.state.notes
        })
        })
        .then(response => response.json())
        .then(response => { console.log(response);
        })
        .catch(err => { console.log(err); });
  }

  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
    fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}`, {
      "method": "DELETE",
      "headers": {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="name">
                  Friend Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="notes">
                  Friend notes:
                  <input
                    name="notes"
                    id="notes"
                    type="test"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);
// this will update entries with PUT
fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
  "method": "PUT",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    _id: this.state.id,
    name: this.state.name,
    notes: this.state.notes
  })
})
.then(response => response.json())
.then(response => { console.log(response);
})
.catch(err => { console.log(err); });
// read all entities
fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey"
  }
})
.then(response => response.json())
.then(response => {
  this.setState({
    friends: response
  })
})
.catch(err => { console.log(err); 
});
// creates entity
fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    name: this.state.name,
    notes: this.state.notes
  })
})
.then(response => response.json())
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err);
});
'use strict';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // get all entities - GET
  }
  create(e) {
    // add entity - POST
    e.preventDefault();
  }
  update(e) {
    // update entity - PUT
    e.preventDefault();
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
  }
  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="name">
                  Friend Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="notes">
                  Friend notes:
                  <input
                    name="notes"
                    id="notes"
                    type="test"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;

const ExampleComponent = (props) => { 
    const [stateVariable, setStateVariable] = useState('');
    useEffect(() => {
        // send HTTP request
        // save response to variable
    }, [])
    return ( 
        <div> 
            <h1>This is a function component view</h1> 
        </div> 
    ) 
} 
import React, { useState } from 'react' 
import ReactDOM from 'react-dom' 
const ParentComponent = () => { 
    const [stateVariable, setStateVariable] = useState('this is the starting value for the variable'); 
    return ( 
        <div> 
            <h1>This is a function component view</h1>
            <ChildComponent exampleProp={stateVariable} />
        </div> 
    ) 
} 
const ChildComponent = (props) => {
    return (
        <div>
            <h2>{props.exampleProp}</h2>
        </div>
    )
}
ReactDOM.render( <ParentComponent />, document.getElementById('app') );
ReactDOM.render( <ExampleComponent />, document.getElementById('app') );
use strict';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // get all entities - GET
  }
  create(e) {
    // add entity - POST
    e.preventDefault();
  }
  update(e) {
    // update entity - PUT
    e.preventDefault();
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
  }
  handleChange(changeObject) {
    this.setState(changeObject)
  }
  
  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="name">
                  Friend Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="notes">
                  Friend notes:
                  <input
                    name="notes"
                    id="notes"
                    type="test"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
       title: title,
       body: body,
       userId: Math.random().toString(36).slice(2),
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
       setPosts((posts) => [data, ...posts]);
       setTitle('');
       setBody('');
    })
    .catch((err) => {
       console.log(err.message);
    });
    };
    import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import UserTable from "./components/UserTable";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hmmm

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios(
      "http://localhost:3000/candidate"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return "Loading...";
  if (error) return "Error!";

  // <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <>
      <UserTable data={data} />
    </>
  );
}
