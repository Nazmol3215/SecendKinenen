import React, { useState, useEffect, useRef } from "react";
import "./LiveChat.css";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", from: "support" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  const chatBoxRef = useRef(null);

  const questionsAndAnswers = {
    "আমি কি একটি নির্দিষ্ট পণ্য সম্পর্কে বিস্তারিত তথ্য পেতে পারি?": "অবশ্যই! আপনি কোন পণ্যটি সম্পর্কে জানতে চান? দয়া করে পণ্যের নাম বা লিংক শেয়ার করুন।",
    "আমি কীভাবে আমার অর্ডার ট্র্যাক করব?": "আপনার অর্ডার ট্র্যাক করতে, দয়া করে আপনার অর্ডার আইডি দিন। আমরা আপনাকে সর্বশেষ স্ট্যাটাস জানাব।",
    "পণ্যটি কি স্টকে আছে?": "দয়া করে পণ্যের নাম বা আইডি শেয়ার করুন। আমি চেক করে জানাচ্ছি পণ্যটি স্টকে আছে কি না।",
    "আপনার ওয়েবসাইটে কী ধরনের পেমেন্ট অপশন রয়েছে?": "আমাদের ওয়েবসাইটে ক্রেডিট/ডেবিট কার্ড, মোবাইল ব্যাংকিং (যেমন: বিকাশ, নগদ), এবং ক্যাশ অন ডেলিভারি অপশন রয়েছে।",
    "আমি কিভাবে একটি পণ্য রিটার্ন করতে পারি?": "পণ্য রিটার্ন করতে, দয়া করে আপনার অর্ডার আইডি এবং রিটার্নের কারণ আমাদের জানান। আমরা আপনার রিটার্ন প্রক্রিয়া শুরু করব।",
    "পণ্যের দাম কি নির্ধারিত?": "হ্যাঁ, আমাদের পণ্যের দাম নির্ধারিত। তবে বিশেষ ডিসকাউন্টের সময় দাম কমতে পারে।",
    "পণ্য স্টকে আসলে কি আমাকে জানানো হবে?": "হ্যাঁ, আপনি “Notify Me” অপশনে সাইন আপ করলে স্টকে আসার সাথে সাথে আপনাকে জানানো হবে।",
    "আপনার পেমেন্ট পদ্ধতিতে কি ক্যাশ অন ডেলিভারি আছে?": "হ্যাঁ, আমরা ক্যাশ অন ডেলিভারি সাপোর্ট করি।",
    "আপনার রিটার্ন পলিসি কী?": "পণ্য গ্রহণের সাত দিনের মধ্যে রিটার্ন করা যাবে, যদি এটি অব্যবহৃত এবং মূল প্যাকেজিংয়ে থাকে।",
    "পণ্য ডেমো ভিডিও কোথায় পাব?": "প্রোডাক্ট পেজে ডেমো ভিডিও দেওয়া থাকে। ভিডিও না থাকলে আমাদের জানাবেন।",
    "পণ্য একাধিক কিনলে কি ছাড় পাব?": "হ্যাঁ, নির্দিষ্ট সংখ্যার উপরে পণ্য কিনলে ডিসকাউন্ট দেওয়া হয়।",
    "আপনারা কি আন্তর্জাতিক শিপিং করেন?": "না, বর্তমানে আমরা শুধুমাত্র বাংলাদেশের ভেতরে ডেলিভারি করি।",
    "কিভাবে Wishlist তৈরি করব?": "প্রোডাক্ট পেজে “Add to Wishlist” বাটনে ক্লিক করুন।",
    "আমি কি ফোনে অর্ডার করতে পারি?": "হ্যাঁ, আমাদের হটলাইনে কল করে অর্ডার করা যাবে।",
    "আপনারা কি কাস্টমার রিভিউ মুছে ফেলেন?": "না, আমরা কোনো রিভিউ মুছে ফেলি না। তবে অনুপযুক্ত ভাষা বা ভুয়া রিভিউ সরানো হতে পারে।",
    "পণ্যের ছবিগুলো কি আসল?": "হ্যাঁ, পণ্যের ছবিগুলো আসল এবং পণ্যটিই প্রদর্শন করে।",
    "ডেলিভারির আগে কি আমাকে ফোন করা হবে?": "হ্যাঁ, ডেলিভারির আগে আমাদের ডেলিভারি পার্টনার আপনার সাথে যোগাযোগ করবে।",
    "আপনারা কি কর্পোরেট অর্ডার গ্রহণ করেন?": "হ্যাঁ, কর্পোরেট অর্ডারের জন্য আমাদের কাস্টমার কেয়ারে যোগাযোগ করুন।",
    "আমি কি রিটার্ন প্রোডাক্ট এক্সচেঞ্জ করতে পারি?": "হ্যাঁ, আপনি রিটার্ন প্রোডাক্ট এক্সচেঞ্জ করতে পারবেন।",
    "আপনারা কি পণ্য গিফট প্যাকেজিং করেন?": "হ্যাঁ, গিফট প্যাকেজিং সার্ভিস আমরা প্রদান করি।",
    "ডেলিভারি দেরি হলে কী করব?": "আপনার অর্ডার আইডি দিয়ে আমাদের জানালে আমরা দ্রুত সমাধান করব।",
    "আপনারা কি কিস্তিতে পেমেন্ট সাপোর্ট করেন?": "হ্যাঁ, নির্দিষ্ট পেমেন্ট গেটওয়ের মাধ্যমে কিস্তিতে পেমেন্ট করা যাবে।",
    "আমি কীভাবে আমার অ্যাকাউন্ট ডিলিট করব?": "আপনার অ্যাকাউন্ট ডিলিট করার জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
    "আমি কিভাবে আমার কার্ট আপডেট করব?": "আপনার কার্ট পেজে গিয়ে পণ্যের সংখ্যা পরিবর্তন করুন অথবা কোনো পণ্য মুছে ফেলুন।",
    "আপনারা কি কাস্টম অর্ডার গ্রহণ করেন?": "হ্যাঁ, নির্দিষ্ট কিছু পণ্যের জন্য আমরা কাস্টম অর্ডার গ্রহণ করি। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",
    "আপনারা কি গ্রাহকদের জন্য প্রাইস ম্যাচ গ্যারান্টি দেন?": "হ্যাঁ, আমরা নির্দিষ্ট শর্তসাপেক্ষে প্রাইস ম্যাচ গ্যারান্টি অফার করি।",
    "কিভাবে রিটার্ন প্রক্রিয়া শুরু করব?": "আমাদের ওয়েবসাইটের “Return & Refund” পেজে গিয়ে নির্দেশনা অনুসরণ করুন।",
    "আপনারা কি বিদেশে ডেলিভারি করেন?": "হ্যাঁ, আমরা আন্তর্জাতিক ডেলিভারি অফার করি। তবে ডেলিভারি চার্জ এবং সময় আলাদা হতে পারে।",
    "ডেলিভেরির সময় কীভাবে আপডেট পাব?": "অর্ডার কনফার্মেশনের পর আপনাকে ট্র্যাকিং নম্বর পাঠানো হবে, যা দিয়ে আপনি আপডেট দেখতে পারবেন।",
    "পণ্যের ওয়ারেন্টি কিভাবে চেক করব?": "প্রোডাক্ট পেজে ওয়ারেন্টি সম্পর্কিত তথ্য দেওয়া থাকে। আরও জানার জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
    "আপনারা কি বিশেষ ছুটির দিনে অফার দেন?": "হ্যাঁ, আমরা বিশেষ ছুটির দিনে বিশেষ অফার এবং ডিসকাউন্ট দিয়ে থাকি।",
    "আমি কি অর্ডার প্লেস করার পর পেমেন্ট মেথড পরিবর্তন করতে পারি?": "দুঃখিত, একবার অর্ডার প্লেস করার পর পেমেন্ট মেথড পরিবর্তন সম্ভব নয়।",
    "আপনারা কি পণ্যের রিভিউ মডারেট করেন?": "হ্যাঁ, আমাদের টিম পণ্যের রিভিউ মডারেট করে, যাতে তা প্রাসঙ্গিক এবং উপকারী হয়।",
    "আপনারা কি ই-গিফট কার্ড ইমেইলে পাঠান?": "হ্যাঁ, আমরা ই-গিফট কার্ড সরাসরি ইমেইলে পাঠাই।",
    "ডেলিভারি চার্জ কীভাবে নির্ধারিত হয়?": "ডেলিভারি চার্জ পণ্যের ওজন, সাইজ এবং লোকেশনের উপর নির্ভর করে।",
    "আপনারা কি অর্ডার ক্যানসেল করলে টাকা ফেরত দেন?": "হ্যাঁ, আমরা টাকা ফেরত দিই। রিফান্ড প্রসেসিং সময়সীমা ৭-১০ কার্যদিবস।",
    "আমি কিভাবে প্রোডাক্টের কালার অপশন চেক করব?": "প্রোডাক্ট পেজে কালার অপশন দেখানো হয়। সেখান থেকে আপনার পছন্দমতো রঙ নির্বাচন করতে পারেন।",
    "আপনারা কি ইন্সটলমেন্ট পেমেন্ট প্ল্যান অফার করেন?": "হ্যাঁ, নির্দিষ্ট পেমেন্ট পার্টনারের মাধ্যমে আমরা ইন্সটলমেন্ট পেমেন্ট সাপোর্ট করি।",
    "আপনারা কি কর্পোরেট গিফটিং সলিউশন দেন?": "হ্যাঁ, আমরা কর্পোরেট গিফটিং সলিউশন প্রদান করি।",
    "আমি কিভাবে অর্ডার ক্যানসেল করব?": "আপনার অ্যাকাউন্টের “My Orders” সেকশনে গিয়ে অর্ডার ক্যানসেল করতে পারবেন।",
    "পণ্যের স্টক শেষ হয়ে গেলে কী করব?": "আপনার ইমেইল আইডি দিয়ে “Notify Me” অপশন ব্যবহার করলে স্টক আপডেট হলে আপনাকে জানানো হবে।"
  };

  const fetchSupportReply = async (userMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      const lowerCaseMessage = userMessage.toLowerCase();

      const matchedQuestion = Object.keys(questionsAndAnswers).find((question) =>
        question.toLowerCase().includes(lowerCaseMessage)
      );

      const reply =
        matchedQuestion &&
        questionsAndAnswers[matchedQuestion] ||
        "Sorry, I didn't understand that. Can you please rephrase?";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, from: "support" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const sendMessage = () => {
    if (userMessage.trim()) {
      const newMessage = { text: userMessage, from: "user" };
      setMessages([...messages, newMessage]);
      fetchSupportReply(userMessage);
      setUserMessage("");
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (
      chatBoxRef.current &&
      !chatBoxRef.current.contains(event.target) &&
      !event.target.closest(".toggle-chat-button")
    ) {
      setIsChatVisible(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (isChatVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatVisible]);

  return (
    <div className="live-chat-container">
      <button
        className="toggle-chat-button"
        onClick={() => setIsChatVisible(!isChatVisible)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        {isChatVisible ? "✖" : "💬"}
      </button>

      {isChatVisible && (
        <div
          className="chat-container"
          ref={chatBoxRef}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            zIndex: 1000,
            background: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "300px",
            maxHeight: "400px",
            overflow: "hidden",
          }}
        >
          <div className="chat-box">
            {!userName ? (
              <div className="user-name-input">
                <input
                  type="text"
                  placeholder="Enter your name to start"
                  value={userName}
                  onChange={handleNameChange}
                />
                <button onClick={() => userName && alert("Welcome " + userName)}>
                  Start Chat
                </button>
              </div>
            ) : (
              <>
                <div
                  className="messages"
                  style={{ padding: "10px", overflowY: "auto", maxHeight: "300px" }}
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.from}`}
                      style={{
                        textAlign: msg.from === "user" ? "right" : "left",
                        margin: "5px 0",
                      }}
                    >
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>

                {isTyping && (
                  <div
                    className="typing-indicator"
                    style={{ padding: "10px", fontStyle: "italic" }}
                  >
                    <span>Support is typing...</span>
                  </div>
                )}

                <div
                  className="chat-input"
                  style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    style={{ flex: 1, padding: "5px" }}
                  />
                  <button onClick={sendMessage} style={{ marginLeft: "10px" }}>
                    Send
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
