 
 import React from 'react';
 import ImageSlider from "./ImageSlider.js";

 const SliderImages = () => {
 
 const images = [

    {
        url: `https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
    },

{
    url:`https://img.freepik.com/free-vector/natural-background-with-gradient-tropical-forest-landscape_23-2148274902.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
   
},
{
    url:`https://img.freepik.com/premium-photo/white-jewelry-flowers-with-blue-branches_777271-3138.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/premium-vector/cup-coffee-from-another-world-vector-illustrator-art_876236-1054.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/premium-photo/realistic-picture-herd-elephants-african-savanha-near-water-hole-night-wit-full_920019-315.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/free-photo/spectral-light-illuminates-transparent-red-colored-red-roses-abstract-flower-art-generative-ai_157027-1729.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/free-photo/digital-art-moon-boat_23-2150918859.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/premium-photo/fantasy-mountain-lake-lake-foreground-generated-ai-illustration_18714-332.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/premium-photo/vertical-shot-beautiful-sandstone-mountains-trees-near-lake_665346-21126.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/premium-photo/mountains-with-beautiful-red-blue-sky-nature-mountains_743855-6527.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},

{
  url:`https://img.freepik.com/free-photo/galaxy-nature-aesthetic-background-starry-sky-mountain-remixed-media_53876-126761.jpg?size=626&ext=jpg&ga=GA1.1.1388286115.1709657894&semt=sph`,
},




 ];

  return (
    <>
      <div>
        <ImageSlider images={images} />
      </div>
    </>
  );
 };


  
 export default SliderImages;