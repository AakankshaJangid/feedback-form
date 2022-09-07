import React, { useState } from 'react'

export default function Form() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [cNum,setcNum] = useState('')
    const [subject,setSub] = useState('')
    const [messsage,setMsg] = useState('')
    const printDetails = (e) =>{
        e.preventDefault()
        console.log(`Name : ${name}`)
        console.log(`Email : ${email}`)
        console.log(`Contact number : ${cNum}`)
        console.log(`Subject : ${subject}`)
        console.log(`Message : ${messsage}`)
    }
  return (
    <div>
      <form className='completeForm'>
        <div className='formGrp1'>
            <div className='name'>
            <label>Name</label><br/>
            <input type={'text'} value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Email</label><br/>
            <input type={'text'} value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='formGrp2'>
            <label>Contact Number</label><br/>
            <input type={'number'} value={cNum} onChange={e=>setcNum(e.target.value)}/><br/>
            <label>Gender : </label>
            <div className='Gender'>
                <input type={'radio'} value='female'/>
                <label className='female'> Female </label>
                <input type={'radio'} value='male'/>
                <label className='male'> Male </label>
                <input type={'radio'} value='other'/>
                <label className='other'> Other </label>
            </div>
            <label>Subject</label><br/>
            <textarea value={subject} onChange={e=>setSub(e.target.value)}></textarea><br/>
            <label>Message</label><br/>
            <textarea value={messsage} onChange={e=>setMsg(e.target.value)}></textarea><br/>
        </div>
        <div className='btnBox'>
        <button type='submit' className='btn' onClick={printDetails}>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}
