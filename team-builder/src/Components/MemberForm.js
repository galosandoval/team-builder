import React from 'react'

const MemberForm = (props) => {
  const { values, update, submit } = props
  const onChange = (evt) => {
    const { name, value } = evt.target
    update(name, value)
  }
  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add an Exclusive Member</h2>
        <button disabled={!values.name || !values.email || !values.role}>submit</button>
      </div>
      <div className='form-group inputs'>
        <h3>Details</h3>
        <label htmlFor='nameInput'>Name:&nbsp;
          <input
            id='nameInput'
            name='username'
            type='text'
            placeholder='Enter name'
            maxLength='20'
            value={values.username}
            onChange={onChange}
          />
        </label>
        <label htmlFor='emailInput'>Email:&nbsp;
          <input
            id='emailInput'
            name='email'
            type='email'
            placeholder='Enter email'
            maxLength='20'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>Role:&nbsp;
          <select name='role' value={values.role} onChange={onChange}>
            <option disabled value=''>Select a role</option>
            <option value='muscle'>The Muscle</option>
            <option value='brains'>The Brains</option>
            <option value='char'>The One in the Chair</option>
          </select>
        </label>
      </div>
    </form>
  )
}

export default MemberForm