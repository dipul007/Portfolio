import React, { useState } from "react";
import { ConnectDiv1, ConnectDiv, Input, Button, ErrorDIv } from "./style";
import { SharedModal } from "./Shared/modal";

export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const url = "http://localhost:3000/addtodoCard";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          Name: name,
          email: email,
          message: message,
          date: Date(),
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
    setName("");
    setEmail("");
    setMessage("");
    verifyaccount.setOpen(true);
  };
  const verifyaccount = SharedModal({
    heading: "Holla !",
    description: "I will Hear You !!",
    onCancel: () => verifyaccount.setOpen(false),
  });
  
  return (
    <>
      {" "}
      {verifyaccount.component}
      <ConnectDiv>
        <form onSubmit={onSubmit}>
          <ConnectDiv1>
            <div>Name</div>
            <Input
              type="text"
              value={name}
              required
              onChange={(e: any) => setName(e.target.value)}
            />
            <div>Email</div>
            <Input
              type="email"
              value={email}
              required
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <div>Message</div>
            <Input
              type="text"
              value={message}
              required
              onChange={(e: any) => setMessage(e.target.value)}
              className="input"
            />

            <Button>Submit</Button>
          </ConnectDiv1>
        </form>
      </ConnectDiv>
    </>
  );
}
