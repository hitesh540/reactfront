import React from "react";
import Layout from "./Layout";
import FooterPagePro from "./footer";
import {Img} from 'react-image'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';



const about = () => {
    return (
        <Layout
            title="LEAF-MEALS"
            description="The Hub Of Restrourants And Meal Servises"
            className="container-fluid" >
            
            <div className="row">
            <h2 className="head">ABOUT</h2>
            </div>

            <br/>

            <div className="row">
            <div className="col-10">
            <hr/>

             <h3>Leaf-Meals</h3>

                <p className="lead mt-2" >
                      Leaf-Meals is the large chain of Restrourants and Tiffine Service providerse.
                      we provides the details of Restrourants and Tiffine services which can helps to find something greate of customers need.
                </p>
                <h6  >Currently We are started registration of Restrourants and Meals On The Smallest amount of charge. The  registration Fees will Be Between 30Rs To 100Rs. </h6>
              
                <br/>
                <hr/>
                <h3 >Restrourants</h3>
              <br/>
              <Img src="https://c.ndtvimg.com/2020-01/hqocblio_restaurant-_625x300_14_January_20.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
              <br/><br/>

                <p className="lead mt-2">
                     The large Chain of Restrourant Meal Service providers .  The perfect Restrourants can be available as per the locations of users. 
                      here  the details of Restrourants can be found and  can helps to get best of customers choice near to their locations.
                </p>

              <br/>
               <hr/>

                <h3>Tiffines</h3>
                <br/>
              
              <Img src="https://3.imimg.com/data3/HB/OP/MY-11059051/lunch-boxtiffin-service-500x500.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }} />
              <br/><br/>

                <p className="lead mt-2" >
                     The  Chain of Tiffine  Services .
                      here  the tiffines are available in any Area. We provides the details of Meal. The Tiffine Service can be available as per  the locations of customers.
                </p>
                <br/>
                <hr/>
                <br/>

                <h3 >Start A Business With Ous</h3>
                        <br/>
                        <h3 >Contact Us</h3>
                        <br/>
                        <h6><span className="bld">Hitesh Borse</span>(Founder)</h6>
                        <br/>
                        <h6 >Email - <EmailOutlinedIcon/>nskhitesh2016@gmail.com</h6>
                          <br/>
                          <h6 >Contact - <CallOutlinedIcon/>8208267094</h6>
                          <br/>
                         <h6 >Registration Fees Between 30Rs To 100Rs</h6>

            </div>
            </div>


             <br/><br/><br/>


            <div  className="futer">
            <FooterPagePro/>
            </div>


        </Layout>
    );
};


export default about;