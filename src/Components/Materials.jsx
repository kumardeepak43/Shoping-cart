import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux';
import { NavLink, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Products from './Products';
import Skeleton from 'react-loading-skeleton';

const Materials = () => {

    const {id} =useParams();
    const [Materials, setMaterials] = useState([]);
    const [loading, setLoading] =useState(false);

    const dispatch = useDispatch();
    const addMaterials = (Materials) => {
      dispatch(add(Materials));
    }

    useEffect(()  => {
      const getMaterials = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setMaterials(await response.json());
        setLoading(false);

      }
    }, []);

  // const loading = () => {
  //   return(
  //     <>
  //     <div className="col-md-6" style={lineHeight:2}>
    //   <Skeleton height={400}/>
    //   <div className="col-md-6">
    //   <Skeleton height={50} width={300} />
    //   <Skeleton height={75} ></Skeleton>
        //  <Skeleton height={25} ></Skeleton>
        //  <Skeleton height={50} width={150} />
        //  <Skeleton height={150} />
        // <Skeleton height={50} width={100} />
        // <Skeleton height={50} width={100} style={marginLeft:6} />
    //  </div>  
  // </div>
  //     </>
  //   )
  // }
    const showMaterials = () => {
      return (
        <>
             <div className="col-md-6">
                <img src={Materials.image} alt={Products.title} height="400px" width="400px"></img>
             </div>
             <div className="col-md-6">
              <h4 className='text-uppercase text-black-50'>
                {Products.category}
              </h4>
              <h1 className='display-5'>{Materials.title}</h1>
              <p className='lead fw-bolder'>Rating{Materials.rating && Materials.rating.rate}
              <i className='fa fa-star'></i>
              </p>
              <h3 className='display-6 fw-bold my-4'>
                ${Materials.price}
              </h3>
              <p className='lead'>{Materials.description}</p>
              <button className='btn btn-outline-dark px-4 py-2'>
                Add to cart 
              </button>
              <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2' onClick={()=>addMaterials(Materials)}>
                Go to cart 
              </NavLink>
             </div>
        </>
      )
    }
  return (
    <div>
     <div className="container py-5">
      <div className="row py-4">
        {loading  ? <loading/> : <showMaterials/>}
      </div>
     </div>
    </div>
  );
}

export default Materials