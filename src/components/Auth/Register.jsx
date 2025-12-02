import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";



export default function Register() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        password: ""
    });
    
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            console.log("Registration Successful:", response.data);
            // navigate("/login"); // redirect
        }catch(error){
            console.error("There was an error!", error);
        }
        console.log("Form Submitted:", formData);
        
    }

    return (
        <div>
          <h2>Register Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            /><br />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            /><br />

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            /><br />

            <button type="submit">Submit</button>
          </form>
        </div>
    );
}
