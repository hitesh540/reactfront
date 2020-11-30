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
            <h2 className="head">ABOUT US</h2>
            </div>

            <br/>

            <div className="row">
            <div >
            <hr/>

             <h3 className="cent">Leaf-Meals</h3>

                <p className="lead mt-2" className="cent">
                      Leaf-Meals is the large chain of Restrourants and Tiffine Service providerse.
                      we provides the details of Restrourants and Tiffine services which can helps to find something greate of customers need.
                </p>
                <h6  className="cent">Currently We are started registration of Restrourants and Meals. So The registration Fees will Be Between 30Rs To 100Rs.</h6>
              
                <br/>
                <hr/>
                <h3 className="cent">Restrourants</h3>
              <br/>
              <Img src="https://c.ndtvimg.com/2020-01/hqocblio_restaurant-_625x300_14_January_20.jpg" className="marg"/>
              <br/><br/>

                <p className="lead mt-2" className="cent">
                     The large  Restrourants Meal Service providers Chain.  The perfect Restrourants for customers can be available as per the locations of users. 
                      here  the details of Restrourants can be found and  can helps to get best of your choice near customers area.
                </p>

              <br/>
               <hr/>

                <h3 className="cent">Tiffines</h3>
                <br/>
              
              <Img src="https://3.imimg.com/data3/HB/OP/MY-11059051/lunch-boxtiffin-service-500x500.jpg" className="fetur" className="margg" />
              <br/><br/>

                <p className="lead mt-2" className="cent">
                     The large Chain of Tiffine  Services providers .
                      here  the tiffines can be available for any area as per the locations for customers. the details of Tiffine Service can be Provided as per  the locations of customers.
                </p>
                <br/>
                <hr/>
                <br/>

                <h3 className="cent">Start A Business With Ous</h3>
                        <br/>
                        <h3 className="cent">Contact Us</h3>
                        <br/>
                        <h6 className="cent">Email - <EmailOutlinedIcon/>nskhitesh2016@gmail.com</h6>
                          <br/>
                          <h6 className="cent">Contact - <CallOutlinedIcon/>8208267094</h6>
                          <br/>
                         <h6 className="cent">Registration Fees Between 30Rs To 100Rs</h6>

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