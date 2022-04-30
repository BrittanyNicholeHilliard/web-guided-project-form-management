import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    const name = evt.target.name;
    const {value} = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
evt.preventDefault();
submit();
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
              <input
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={onChange}
              maxLength="20"
              />
        </label>

        <label>Email
        <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={values.email}
        onChange={onChange}
        />
        </label>
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select value={values.role} name="role" onChange={onChange}>
          <option value="">---Select Role--</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Alumni">Alumni</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.username || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
