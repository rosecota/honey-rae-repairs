import { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(
    () => {
      return fetch(`http://localhost:8088/users?isStaff=true`)
        .then(response => response.json())
        .then((employeeArray) => {
          setEmployees(employeeArray)
        })
    },
    []
  )

  return <article className="employees">
    {
      employees.map(employee => {
        return <section className='employee' key={`employee--${employee.id}`}>
          <div>{employee.fullName}</div>
          <div>{employee.email}</div>
        </section>
      })
    }
  </article>
}

