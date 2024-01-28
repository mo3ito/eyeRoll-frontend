"use client";
import {useContext,useState,useEffect,FormEvent,} from "react";
import { AuthContext } from "@/context/authContext";
import getterWithAuthId from "@/services/getterWithAuthId";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_IMAGE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_DELETE_IMAGE_PRODUCT
} from "@/routeApi/endpoints";
import LoadingPage from "@/components/loading/loadingPage";
import ModalDefault from "@/components/modal/modalDefault";
import DescriptionContent from "@/components/descriptionContent/descriptionContent";
import EditProducts from "@/components/editProducts/editProducts";
import Modal from "@/components/modal/modal";
import removal from "@/services/removal";
import { toast } from "react-toastify";
import updaterWithId from "@/services/updaterWithId";
import {ProductsType,DescriptionContentProps,} from "@/types/onlineMenuBo/productsType";
import EditMenuScreen from "@/components/online-menu/editMenuScreen";
import EditMenuMobile from "@/components/online-menu/editMenuMobile";
import HeaderOnlineMenu from "@/components/online-menu/headerOnlineMenu";
import senderFormDataWithId from "@/services/senderFormDataWithId";
import ShowDetailsOnlineMenu from "@/components/online-menu/showDetailsOnlineMenu";
import { ProductDetailsType } from "@/types/onlineMenuUser/onlineMenuUser";



export default function EditMenu() {
  const [businessOwnerId, setBusinessOwnerId] = useState<string>("");
  const { infos } = useContext(AuthContext);
  const [isShowModalDescription, setIsShowModalDescription] =useState<boolean>(false);
  const [descriptionInfos, setDescriptionInfos] =useState<DescriptionContentProps | null>(null);
  const [isShowDeleteProduct, setIsShowDeleteProduct] =useState<boolean>(false);
  const [isShowEditProdct, setIsShowEditProduct] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productPricePetty, setProductPricePetty] = useState<string | number>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAssortment, setProductAssortment] = useState<string>("");
  const [productImage , setProductImage]=useState<string>("")
  const [imageFile , setImageFile]=useState<null | File>(null)
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const [isChangeImage , setIsChangeImage]=useState<boolean>(false)
  const [ isDeleteProductImage ,setIsDeleteProductImage]=useState<boolean>(false)
  const [isDeleteProductImageModal , setIsDeleteProductImageModal] = useState<boolean>(false)
  const [isShowProduct , setIsShowProduct]=useState<boolean>(false)
  const [detailsProduct , setDetailsProduct]=useState<ProductDetailsType | null>(null)
  const queryClient = useQueryClient();

  console.log("productName", productName);
  console.log("productPrice", productPrice);
  console.log("productPricePetty", productPricePetty);
  console.log("productDescription", productDescription);
  console.log("productAssortment", productDescription);
  console.log("file image" , imageFile);
  

  useEffect(() => {
    if (infos && infos.id) {
      setBusinessOwnerId(infos.id);
    }
  }, [infos]);

  const queryKey = ["all products"];

  const { data: products, isLoading } = useQuery(
    businessOwnerId ? queryKey : [],
    () => {
      if (businessOwnerId) {
        return getterWithAuthId(
          BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT,
          businessOwnerId
        );
      }
      return null;
    }
  );

  useEffect(() => {
    products && setAllProducts(products?.data);
  }, [products]);

  const descriptionHandler = async (
    productName: string,
    productDescription: string
  ) => {
    await setDescriptionInfos({
      productName,
      productDescription,
    });
    setIsShowModalDescription(true);
  };

  const processDeleteHandler = async (productId: string) => {
    await setProductId(productId);
    setIsShowDeleteProduct(true);
  };

  const deleteProductHandler = async () => {
    try {
      if (productId) {
        const response = await removal(
          BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT,
          productId
        );
        if (response?.status === 200) {
          await queryClient.invalidateQueries(queryKey);
          setIsShowDeleteProduct(false);
          toast.success("Product deleted successfully");
        }
      }
    } catch (error: any) {
      if (error?.response.status === 400) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
  };

  const processEditHandler = (
    producName: string,
    productPrice: string,
    productPricePetty: string,
    productAssortment: string,
    productDescription: string,
    productId: string
  ) => {
    setIsShowEditProduct(true);
    setProductName(producName);
    setProductAssortment(productAssortment);
    setProductDescription(productDescription);
    setProductPrice(productPrice);
    setProductPricePetty(productPricePetty);
    setProductId(productId);
    // setProductImage(productImage)
  };

  useEffect(()=>{
    const fetchData = async ()=>{
      if(isChangeImage && productId && businessOwnerId && imageFile){
        const formData = new FormData()
        formData.append("productImage" , imageFile)
        try {
          const response = await senderFormDataWithId(`${BUSINESS_OWNER_ONLINE_MENU_IMAGE_PRODUCT}?productId=${productId}`,businessOwnerId,formData)
          if(response?.status === 200){
            queryClient.invalidateQueries(queryKey);
         
         await setImageFile(null)
         await setIsChangeImage(false)
          toast.success("product image updated successfully");
         
          }
        } catch (error: any) {
          if (error?.response.status === 400) {
            
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            
            toast.error("An error occurred while processing your request");
          }
        }
      }
    }
   
    fetchData()
  },[isChangeImage , productId , businessOwnerId , imageFile])

const deleteProductImage = async ()=>{
  if( productId && businessOwnerId){

    try {
      const response = await removal(`${BUSINESS_OWNER_ONLINE_MENU_DELETE_IMAGE_PRODUCT}?productId=${productId}` , businessOwnerId )
      if(response?.status === 200){
        setIsDeleteProductImageModal(false)
        queryClient.invalidateQueries(queryKey);
        toast.success("product image deleted successfully");
      }
    } catch (error: any) {
      if (error?.response.status === 400) {
        setIsDeleteProductImageModal(false)
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        setIsDeleteProductImageModal(false)
        toast.error("An error occurred while processing your request");
      }
    }
}


}

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      productName,
      productPricePetty,
      productAssortment,
      productPrice,
      productDescription,
    };

    try {
      const response = await updaterWithId(
        BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT,
        productId,
        body
      );
      if (response?.status === 200) {
          queryClient.invalidateQueries(queryKey);
          setIsShowEditProduct(false);
          toast.success("product updated successfully");
      }
    } catch (error: any) {
      if (error?.response.status === 400) {
        setIsShowEditProduct(false)
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        setIsShowEditProduct(false)
        toast.error("An error occurred while processing your request");
      }
    }
  };

  console.log("productid" , productId);

  useEffect(()=>{
    if(isDeleteProductImage){
    return setImageFile(null)
    }
    if (imageFile !== null){
     return setIsDeleteProductImage(false)
    }
  },[isDeleteProductImage , imageFile])

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="h-max">
      <div className="w-full min-h-screen h-max  pb-40 bg-sky-100  ">
        

          <HeaderOnlineMenu
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            products={products}
          />
          <EditMenuScreen
            allProducts={allProducts}
            descriptionHandler={descriptionHandler}
            processEditHandler={processEditHandler}
            processDeleteHandler={processDeleteHandler}
            setDetailsProduct={setDetailsProduct}
            setIsShowProduct={setIsShowProduct}
            setIsDeleteProductImageModal={setIsDeleteProductImageModal}
            setProductId={setProductId}
            setImageFile={setImageFile}
            setIsChangeImage={setIsChangeImage}
          />
          <EditMenuMobile
            allProducts={allProducts}
            descriptionHandler={descriptionHandler}
            processEditHandler={processEditHandler}
            processDeleteHandler={processDeleteHandler}
            setDetailsProduct={setDetailsProduct}
            setIsShowProduct={setIsShowProduct}
            setProductId={setProductId}
            setIsDeleteProductImageModal={setIsDeleteProductImageModal} 
            setImageFile={setImageFile}
            setIsChangeImage={setIsChangeImage}
          />
       
      </div>
      <ModalDefault
        isShowModal={isShowModalDescription}
        setIsShowModal={setIsShowModalDescription}
      >
        <DescriptionContent
          productName={descriptionInfos?.productName}
          productDescription={descriptionInfos?.productDescription}
        />
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowDeleteProduct(false)}
        text="Are you sure to delete?"
        isShowModal={isShowDeleteProduct}
        setIsShowModal={setIsShowDeleteProduct}
        confirmHandler={deleteProductHandler}
      />
        <Modal
        cancelHandler={() => setIsDeleteProductImageModal(false)}
        text="Are you sure to delete image?"
        isShowModal={isDeleteProductImageModal}
        setIsShowModal={setIsDeleteProductImageModal}
        confirmHandler={deleteProductImage}
      />
      <ModalDefault
        isShowModal={isShowEditProdct}
        setIsShowModal={setIsShowEditProduct}
      >
        <EditProducts
          onSubmit={submitHandler}
          setProductName={setProductName}
          setProductAssortment={setProductAssortment}
          setProductPrice={setProductPrice}
          setProductPricePetty={setProductPricePetty}
          setProductDescription={setProductDescription}
          producName={productName}
          productPrice={productPrice}
          productPricePetty={productPricePetty}
          productDescription={productDescription}
          productAssortment={productAssortment}
          imageFile={imageFile}
        />
      </ModalDefault>
      <ShowDetailsOnlineMenu isShowProduct={isShowProduct} setIsShowProduct={setIsShowProduct} productDetails={detailsProduct}/>
    </div>
  );
}
