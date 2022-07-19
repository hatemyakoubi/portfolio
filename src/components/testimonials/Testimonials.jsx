import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hela Abeda ",
      title: "MERN Stack Developer",
      img:"assests/hela.jpeg",
      icon: "assests/linkedin.png",
      lien:"https://www.linkedin.com/in/hela-abeda-b0b560120",
      desc:"It was a very good idea to take your class! I am very happy that I finished it! It is very hard to make first step to your dreams. Thank you for helping me to make this step! I got very good experience with Skillspire. Thank you to Hatem for his patience and hard work! He is a good instructor!.",
        featured: true,
    },
    // {
    //   id: 2,
    //   name: "Ali Ncib",
    //   title: "Manager of Ncib Distribution",
    //   img:"assests/user.png",
    //   icon: "assests/linkedin.png",
    //   lien:"",
    //   desc:
    //     "Thanks for the application of stock management.It was useful that helped me to oranganize my stock .. This application helped me to know when i have a shortage in specified product or to know which product i need to get more of it that's going pretty well in the market.  Morover , with this application i can get to know how many product i sold per day with a specified date so everything would be saved there so i can do my stats and help to improve my work. ",
    //   featured: true,
    // },
    {
      id:2,
      name: "Hachem Bayadhi",
      title: "Student of ISET Mahdia",
      img:"assests/hachem.jpg",
      icon: "assests/linkedin.png",
      lien:"https://www.linkedin.com/in/hachem-bayadhi-33b492211/",
      desc:
        "I could not find words to express the extent to which Professor Hatem was able to frame students or frame me, because he is transparently a person who is proud of his profession and what he offers, and the wonderful thing is that he follows up with you step by step.It was a good experience for me and I will continue to deal with him in the future because he is honestly a well-developed professor",
      featured: true,
    },
    {
      id: 3,
      name: "Ines Bouallgue",
      title: "QA test automation engineer",
      img:"assests/ines.jpg",
      icon: "assests/linkedin.png",
      lien:"https://www.linkedin.com/in/ines-bouallegue-199988186",
      desc:
        "The training was very informative and professional, I learned a lot, the trainer was caring and very attentive. I really enjoyed this training, thank you sir hatem",
        featured: true,
    },
    {
      id: 4,
      name: "May Kdhidri",
      title: "Sudent of ESSCT Tunisia",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/linkedin.png",
      lien:"linkedin.com/in/hela-abeda-b0b560120",
      desc:
        "I would like to thank Mr Hatem Yaakoubi for his valuable advices, from which we benefited a lot. Especially for the effort he made with us throughout the period of working with him",
        featured: true,
    },
    
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assests/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt=""/>
              <a href={d.lien} target="_blank"><img className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}