import { useState } from "react"

export default function CommentsForm() {

    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    const handlerInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    };

    const handlerSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return (
        <div>
            <h3>Comment From</h3>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handlerInputChange}
                />
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea
                    type="text"
                    placeholder="mention a remarks"
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handlerInputChange}
                />
                <br /><br />
                <label htmlFor="username">Rating</label>
                <input
                    type="number"
                    placeholder="rating"
                    min={1}
                    max={5}
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handlerInputChange}
                />
                <br /><br />
                <button>Add a Comment</button>
            </form>
        </div>
    )
}
