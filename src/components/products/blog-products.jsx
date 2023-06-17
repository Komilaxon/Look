import "./products.css"
export const BlogPro = () => {
  const blogPro = [
    {
      id: 1,
      img: "https://images.uzum.uz/cffo5o2djr2oefduhrig/original.jpg",
      text: "Fashion",
      title: "This is first Post For Blog",
      body: "Posted by HasTech 12TH Nov 2023",
    },
    {
      id: 2,
      img: "https://previews.123rf.com/images/anneleven/anneleven1912/anneleven191204055/135864542-perfumery-spa-and-branding-concept-pink-perfume-bottle-on-glossy-background-sweet-floral-scent.jpg",
      text: "Fashion",
      title: "This is first Post For Blog",
      body: "Posted by HasTech 12TH Nov 2023",
    },
    {
      id: 3,
      img: "https://i.makeup.fr/2/24/24eqs2fn5vhz.jpg",
      text: "Fashion",
      title: "This is first Post For Blog",
      body: "Posted by HasTech 12TH Nov 2023",
    },
    {
      id: 4,
      img: "https://dev.rodpub.com/images/197/194_main.jpg",
      text: "Fashion",
      title: "This is first Post For Blog",
      body: "Posted by HasTech 12TH Nov 2023",
    },
  ];

  return (
    <div className="blogPro_box">
      <h3 className="pro_title">From Our Latest Blogs</h3>
      <span className="pro_span"></span>
      <p className="pro_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        culpa?
      </p>
      <ul className="pro_list">
        {blogPro?.map((item) => {
          return (
            <li key={item.id} className="pro_item">
              <div className="pro_img">
                <img className="pro_img" src={item.img} alt="img" />
              </div>
              <div className="pro_text_box">
                <p className="pro_inner_text">{item.text}</p>
                <h3 className="pro_subtitle">{item.title}</h3>
                <p className="pro_body">{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
