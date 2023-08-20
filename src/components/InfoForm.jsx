/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const InfoForm = ({data, onChange }) => {
  return (
    
    <div className="info-container form-container">
    <label htmlFor="firstName">First Name:
    <input
      type='text'
      name='firstName'
      placeholder='First Name'
      value={data.firstName}
      onChange={onChange}
    />
    </label>
    <label htmlFor="lastName">Last Name:
    <input
      type='text'
      name='lastName'
      placeholder='Last Name'
      value={data.lastName}
      onChange={onChange}
    />
    </label>
    <label htmlFor="phone">Phone:
    <input
      type='tel'
      name='phone'
      placeholder='Phone Number'
      value={data.phone}
      onChange={onChange} />
      </label>
    <label htmlFor="email">eMail:
    <input
      type='email'
      name='email'
      placeholder='Email'
      value={data.email}
      onChange={onChange} />
      </label>
  </div>
  )
}
