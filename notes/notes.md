+ the facebook - MI7: The Full Stack Project
  - React / Redux / Ruby on Rails
  - 2 weeks (10 days)
  - look for appropriate lecture notes / videos / research best   practices / surf stackoverflow / ask for help
  - due diligence

+ 0:
  - Checklist: 
  
  https://open.appacademy.io/learn/full-stack-in-person/react/rails-react-redux-configuration-checklist
  
  - User Authentication
    - 

remove debuggers
etc

node js
ruby 

pacakge json:

under scripts:

"postinstall": "webpack"
top level key
  "engines" : {
    "node": "10.13.0"
    "npm": "6.11.3"
  }

  commit all changes

  heroku login (pres any key to login on browser)

  heroku git: remote -a flipper-aa

  git push -u heroku master

  //

Difference between Function vs Class components 

  Because a functional component is just a plain JavaScript function, you CANNOT use setState() in your component. That’s the reason why they also get called functional stateless components. So everytime you see a functional component you can be sure that this particular component doesn’t have its own state.

  If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.

  Conclusion:

  Cons:
  - no setState()
  - no LifeCycleMethods

  Pros:
  - easier to read and test because they are POJOs
  - less code
  - easier to separate container and presentational components
    because you will be forced to think more about component's
    state because you do not have access to setState() (you do so
    in Class components)
  - possible future performance boost (React team announcement)

  Mini conclusion: 
  
  And so to answer our question before, you should use functional components if you are writing a presentational component which doesn’t have its own state or needs to access a lifecycle hook. 

  NOTE: You can still "filter" state when you are using Class component. this.state = this.props.slice (slice is passed down from container component)

  - Difference Between NAME and VALUE of INPUT HTML ELEMENT

  Only form elements with a name attribute will have their values passed when submitting a form.

  The ID of a form input element has nothing to do with the data contained within the element. IDs are for hooking the element with JavaScript and CSS. The name attribute, however, is used in the HTTP request sent by your browser to the server as a variable name associated with the data contained in the value attribute.

  Source: https://teamtreehouse.com/community/what-is-the-difference-between-id-and-name-attributes-in-form-elements

  Permit NESTED Params: https://stackoverflow.com/questions/18436741/rails-4-strong-parameters-nested-objects

  How To Pick Only One Radio Button ? 
    Give them the same name. The same name assures only 1 radio button within a group of them is picked. 

  Radio Button Click Twice To Make It Work 
    Remove PreventDefault

  