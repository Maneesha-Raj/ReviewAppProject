

//Productcard.jsx

import React from 'react';
import { getUserType } from '../pages/Loginpage';
import { Link } from 'react-router-dom';
import dummyImage from '../assets/images/placeholder.jpg'; 


const Productcard = ({ product }) => {
  const userType = getUserType();
  const id = product.productId;

  // Use imagePath instead of image
  const imageUrl = product?.imagePath ? `/api/${product.imagePath}` : dummyImage;

  const deleteProduct = async () => {
    const confirm = window.confirm('Sure want to delete?');
    if (!confirm) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Item Deleted Successfully');
        navigate('/products');
      } else {
        toast.error('Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error deleting product');
    }
  };

  return (
    <div className="border border-solid border-gray-400 rounded-lg p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
      <img
        src={imageUrl}
        alt="product thumbnail"
        className="max-w-full max-h-full object-cover rounded-md mb-2"
      />
      <p className="text-black mb-2">{product.description}</p>

      <div className="flex justify-between items-center">
        {userType === 'user' && (
          <Link to={`/view-product/${product.productId}`}>
            <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">
              View
            </button>
          </Link>
        )}
        {userType === 'admin' && (
          <Link to={`/product-reviews/${product.productId}`}>
            <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">
              View
            </button>
          </Link>
        )}
        {userType === 'admin' && (
          <Link to="/products">
            <button
              onClick={() => deleteProduct(id)}
              className="rounded-full bg-red-600 px-8 py-2 hover:outline-double hover:outline-red-600"
            >
              Delete
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Productcard;









//----------------------------------------------------------------------------------------------------------------

// const Productcard = ({ product }) => {
//   const userType = getUserType();
//   const id = product.productId;

//   // Debugging the product data and image URL
//   console.log("Product Data:", product);
//   // const imageUrl = product.image ? `api/uploads/${product.image}` : dummyImage;
//   const imageUrl =  `api/uploads/${product.image}`;
//   console.log("Constructed Image URL:", imageUrl);

//   const deleteProduct = async () => {
//     const confirm = window.confirm('Sure want to delete?');
//     if (!confirm) return;
//     const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
//     toast.success('Item Deleted Successfully');
//     navigate('/products');
//   };

//   return (
//     <div className='border border-solid border-gray-400 rounded-lg p-4 flex flex-col'>
//       <h2 className='text-xl font-semibold mb-2'>{product.productName}</h2>
//       <img src={imageUrl} alt="product thumbnail" className='w-full h-40 object-cover rounded-md mb-2' />
//       <p className='text-black mb-2'>{product.description}</p>

//       <div className="flex justify-between items-center">
//         {userType === 'user' && (
//           <Link to={`/view-product/${product.productId}`}>
//             <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">View</button>
//           </Link>
//         )}
//         {userType === 'admin' && (
//           <Link to={`/product-reviews/${product.productId}`}>
//             <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">View</button>
//           </Link>
//         )}
//         {userType === 'admin' && (
//           <Link to="/products">
//             <button onClick={() => deleteProduct(id)} className="rounded-full bg-red-600 px-8 py-2 hover:outline-double hover:outline-red-600">Delete</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Productcard;








//------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { getUserType } from '../pages/Loginpage';
// import { Link, useParams } from 'react-router-dom';
// import dummyImage from '../assets/images/placeholder.jpg'; 

// const Productcard = ({ product }) => {
//   const userType = getUserType();
//   const id = product.productId;

//   // Construct the full image URL
//   const imageUrl = product.image ? `http://localhost:3000/uploads/${product.image}` : dummyImage;

//   const deleteProduct = async () => {
//     const confirm = window.confirm('Sure want to delete?');
//     if (!confirm) return;
//     const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
//     toast.success('Item Deleted Successfully');
//     navigate('/products');
//   };

//   return (
//     <div className='border border-solid border-gray-400 rounded-lg p-4 flex flex-col'>
//       <h2 className='text-xl font-semibold mb-2'>{product.productName}</h2>
//       <img src={imageUrl} alt="product thumbnail" className='w-full h-40 object-cover rounded-md mb-2' />
//       <p className='text-black mb-2'>{product.description}</p>

//       <div className="flex justify-between items-center">
//         {userType === 'user' && (
//           <Link to={`/view-product/${product.productId}`}>
//             <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">View</button>
//           </Link>
//         )}
//         {userType === 'admin' && (
//           <Link to={`/product-reviews/${product.productId}`}>
//             <button className="rounded-full bg-teal-500 px-8 py-2 hover:outline-double hover:outline-teal-500">View</button>
//           </Link>
//         )}
//         {userType === 'admin' && (
//           <Link to="/products">
//             <button onClick={() => deleteProduct(id)} className="rounded-full bg-red-600 px-8 py-2 hover:outline-double hover:outline-red-600">Delete</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Productcard;






//-------------------------------------------------------------------------------------------------


// import React from 'react';
// import { getUserType } from '../pages/Loginpage';
// import { Link, useParams } from 'react-router-dom';
// import dummyImage from '../assets/images/placeholder.jpg'; 

// const Productcard = ({ product }) => {
//   const userType = getUserType();
//   const id = product.productId;
//   console.log(id);
//   console.log(product);


//           const deleteProduct = async () => {
//             const confirm = window.confirm('Sure want to delete ?')
//             if (!confirm) return;
//             const res = await fetch(`/api/products/${id}`,
//                 { method: 'DELETE' }
//             )
//             toast.success('Item Deleted Successfully')
//             navigate('/products');
//         }



//   return (
//     <div className='border border-solid border-gray-400 rounded-lg p-4 flex flex-col'>
//       <h2 className='text-xl font-semibold mb-2'>{product.productName}</h2>
//       <img src={dummyImage} alt="product thumbnail" className='w-full h-40 object-cover rounded-md mb-2' />
//       <p className='text-black mb-2'>{product.description}</p>

//       <div className="flex justify-between items-center">
        
//       {userType === 'user' && (
//           <Link to={`/view-product/${product.productId}`}>
//             <button class=" rounded-full bg-teal-500 px-8 py-2 hover:outline-double  hover:outline-teal-500">View</button>     
//             </Link>
//         )}

//         {userType === 'admin' && (
//             <Link to={`/product-reviews/${product.productId}`}>
//                   <button class=" rounded-full bg-teal-500 px-8 py-2 hover:outline-double  hover:outline-teal-500">View</button>     
//               </Link>
//         )}


//         {userType === 'admin' && (
          
//           <Link to="/products">
//             <button onClick={() => deleteProduct(id)}  className="rounded-full bg-red-600 px-8 py-2 hover:outline-double hover:outline-red-600">Delete</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Productcard;



