'use client'
import Count from "@/src/common/count.jsx";
import our_ads_data from "@/src/data/our-ads-data.js";
import Link from "next/link";
import React,{useContext, useEffect, useState} from "react";
import { Context } from "../Clients/clientcomponents";
import Script from "next/script";
import { useRouter } from "next/navigation";

// instructor_portfolio_data
// const instructor_portfolio_data = [
//   {
//     id: 6,
//     img: ``,
//     name: "Esther Howard",
//     total_class: "35",
//     total_st: "291",
//     title: "Instructor",
//     sub_title:
//       "UX/UI Designer, Chemical Engineer, Youtuber, Life Style Blogger",
//     followers: "35,600",
//     following: "135",
//     job_title: "Lead UX Engineer",
//     phone: "+00 365 9852 65",
//     email: "epora@mail.com",
//     experiences_year: "12+ Years",
//     skill_level: "Pro Level",
//     language: "English",
//     biography: (
//       <>
//         <p>
//           Synergistically foster 24/7 leadership rather than scalable platforms.
//           Conveniently visualize installed base products before interactive
//           results. Collaboratively restore corporate experiences and open-source
//           applications. Proactively mesh cooperative growth strategies for
//           covalent opportunities. Competently create efficient markets through
//           best-of-breed potentialities.
//         </p>
//         <p>
//           Compellingly exploit B2B vortals with emerging total linkage.
//           Appropriately pursue strategic leadership whe intermandated ideas.
//           Proactively revolutionize interoperable "outside the box" thinking
//           with fully researched innovation. Dramatically facilitate exceptional
//           architectures and bricks-and-clicks data. Progressively genera
//           extensible e-services for.
//         </p>
//       </>
//     ),
//   },
// ];


// counter data 
// const counter_data = [
//    {
//      id: 1,
//      icon: "fi fi-rr-user",
//      count_number: 276,
//      thousand: "K",
//      title: "Products Sold",
//    },
//    {
//      id: 2,
//      icon: "fi fi-rr-document",
//      count_number: 35,
//      thousand: "",
//      title: "Products Bought",
//    },
//    {
//      id: 3,
//      icon: "fi fi-rr-star",
//      count_number: 407,
//      thousand: "K",
//      title: "Ads Posted",
//    },
//  ];

const SellerPortfolioArea = () => {
  const {user}=useContext(Context);
  const router=useRouter();
  var imagelink=`https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg`;
  const handlelogout=async()=>{
     localStorage.setItem('token', null); console.log("i am clicked");
     router.replace('/');
       //try{
        
      //   const token = localStorage.getItem('token');
      //        const res=await fetch("/api/users/Logout",{
      //         method:'GET',
      //         headers: {
      //           'Content-Type': 'application/json',
      //           'Authorization': `Bearer ${token}`
      //         },
      //        })
      //       const data= await res.json();
      //       console.log(data);
      //       if(data.success){
      //            router.replace('/');
      //       }  
      //  }catch(error){
      //   console.log(`Error while loging out`, error);
       // }
  }
  const gettasks=async()=>{
    try{
      const res=await fetch("/api/ads/Myads",{
        method:'GET',
        headers: {
          'Content-Type': 'application/json' 
        },
       })
      const data= await res.json();
      console.log(data);
      if(data.success){
           console.log(data);
           settasks(data.ads);
      }  
    }catch(error){
      console.log(error);
    }
  }
  const [tasks,settasks]=useState('');
  useEffect(()=>{
       gettasks(); 
  },[])
  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                 { user.avatar.url ?  <img src= {user.avatar.url} alt="instructor-thumb"/> : <img
                  src= {imagelink}
                  alt="instructor-thumb"
                />}
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {user.firstname}
                    </h4>
                    
                    {/* <p>
                      UX/UI Designer, Chemical Engineer, Youtuber, Life Style
                      Blogger
                    </p> */}
                  </div>
                  <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
                    {/* <div className="ins-followers">
                      <h4>35,600</h4>
                      <span>Followers</span>
                    </div>
                    <div className="ins-following">
                      <h4>135</h4>
                      <span>Following</span>
                    </div> */}
                  </div>
                  {/* <div className="instruc-side-btn text-center mb-40">
                    <Link className="ins-btn" href="#">
                      Follow +
                    </Link>
                  </div> */}
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      {/* <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label> <span>Lead UX Engineer</span>
                      </li>
                         */}
                        {
                          user.lastname &&  <div><li>
                           <label>Last Name</label> <span>{user.lastname}</span>
                           </li>
                         </div>
                        }
                        { user.phonenumber && <div> <li> <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label> <span>user.phonenumber</span> </li> </div> }
                      
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label> <span> {user.email} </span>
                      </li>
                      {/* <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label> <span>12+ Years</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label> <span>Pro Level</span>
                      </li>
                      <li>
                        <i className="fi fi-br-comments"></i>{" "}
                        <label>Language</label> <span>English</span>
                      </li> */}
                    </ul>
                  </div>
                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">More:</h5>
                   {
                    user.Facebook && <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                    </Link> 
                   } 
                    {
                     user.Twitter &&  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                    </Link> 
                   }
                   {
                    user.Instagram &&  <Link href="#">
                     <i className="fa-brands fa-instagram"></i>
                   </Link>
                   }
                    {
                     user.Youtube && <Link href="#">
                      <i className="fa-brands fa-youtube"></i>
                      </Link>
                    }
                    
                    <Link className="fa-brands" href={"#"} >
                      {/* Needed an edit icon here    href="seller-profile-update"    */}
                      Edit
                    </Link>
                    <button onClick={handlelogout} className="fa-brands "  >
                    
                      {/* Needed an Logout icon here*/}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
                      <div className="col-xl-8 col-lg-7">
                        <div className="instructor-main-content ml-30 mb-40">
                        { user.biography &&  <div className="instruc-biography mb-50">
                            <h4 className="ins-bio-title mb-30">Biography</h4>
                            {user.biography}
                            {/* <p>
                              Synergistically foster 24/7 leadership rather than scalable
                              platforms. Conveniently visualize installed base products
                              before interactive results. Collaboratively restore
                              corporate experiences and open-source applications.
                              Proactively mesh cooperative growth strategies for covalent
                              opportunities. Competently create efficient markets through
                              best-of-breed potentialities.
                            </p>
                            <p>
                              Compellingly exploit B2B vortals with emerging total
                              linkage. Appropriately pursue strategic leadership whe
                              intermandated ideas. Proactively revolutionize interoperable
                              "outside the box" thinking with fully researched innovation.
                              Dramatically facilitate exceptional architectures and
                              bricks-and-clicks data. Progressively genera extensible
                              e-services for.
                            </p> */}
                          </div> }
                          <div className="instruc-statics mb-20">
                            {/* <div className="row">

                              {
                                  counter_data.map((item, i) =>                         
                                  <div key={i} className="col-xl-4 col-lg-6 col-md-4">
                                <div className="isntruc-tp-counter mb-30">
                                  <h4 className="isntruc-tp-counter__title p-relative">
                                    <span className="counter">
                                    <Count
                                    add_style={true}
                                    number={item.count_number}
                                    text={item.thousand}
                                    style_3={true}
                                  />                          
                                    </span>
                                  </h4>
                                  <p>{item.title}</p>
                                </div>
                              </div>
                                  )
                              }
                              
                            </div> */}
                          </div>
                          <div className="instructor-tp-course">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="instruc-biography">
                                  <h2 className="ins-bio-title mb-35">Ads</h2>
                                </div>
                              </div>
                            </div>
                                                      <div className="row">
                                                        { tasks &&  tasks.slice(0, 4).map((item, i) => (
                                                          <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="tpcourse mb-40">
                                                              <div className="tpcourse__thumb p-relative w-img fix">
                                                                <Link href={`/ad-details?id=${item._id}`}>
                                                                { item.images[0].url ?  <img src={item.images[0].url} alt="course-thumb" /> : <img src={'/assets/img/icon/c-meta-01.png'} alt="course-thumb" />  }
                                                                </Link>
                                                                <div className="tpcourse__tag">
                                                                  <Link href="#">
                                                                    <i className="fi fi-rr-heart"></i>
                                                                  </Link>
                                                                </div>
                                                                {/* <div className="tpcourse__img-icon">
                                                                  <img src={item.icon} alt="course-avata" />
                                                                </div> */}
                                                              </div>
                                                              <div className="tpcourse__content-2">
                                                                <div className="tpcourse__category mb-10">
                                                                  <ul className="tpcourse__price-list d-flex align-items-center">
                                                                    <li>
                                                                      <Link
                                                                        className={item.ct_color}
                                                                        href="/course-details"
                                                                      >
                                                                        {item.Category}
                                                                      </Link>
                                                                    </li>
                                                                    <li>
                                                                      <Link
                                                                        className={item.cn_color}
                                                                        href="/course-details"
                                                                      >
                                                                        {item.Brand}
                                                                      </Link>
                                                                    </li>
                                                                  </ul>
                                                                </div>
                                                                <div className="tpcourse__ava-title mb-15">
                                                                  <h4 className="tpcourse__title">
                                                                    <Link href="/course-details">{item.Adname}</Link>
                                                                  </h4>
                                                                </div>
                                                                <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                                                                  <ul className="d-flex align-items-center">
                                                                    <li>
                                                                      <img
                                                                        src="/assets/img/icon/c-meta-01.png"
                                                                        alt="meta-icon"
                                                                      />
                                                                      <span>{item.createdAt}</span>
                                                                    </li>
                                                                    {/* <li>
                                                                      <img
                                                                        src="/assets/img/icon/c-meta-02.png"
                                                                        alt="meta-icon"
                                                                      />
                                                                      <span>{item.st_text}</span>
                                                                    </li> */}
                                                                  </ul>
                                                                </div>
                                                                <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                                                                  <div className="tpcourse__rating-icon">
                                                                    {tasks.Model}
                                                                    {/* <span>4.7</span>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-ss-star"></i>
                                                                    <i className="fi fi-rs-star"></i>
                                                                    <p>(125)</p> */}
                                                                  </div>
                                                                  <div className="tpcourse__pricing">
                                                                    <h5 className="price-title">${item.Adprice}</h5>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        ))}
                                                      </div>
                 <button> <Link href={'/ad-grid'}  >Get My All Ads</Link>   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerPortfolioArea;