import React from 'react'

export default function EditMenu() {
  return (
    <div className="w-full h-screen bg-sky-100 px-8 py-20">
    <div className="container mx-auto">
      <div className="flex flex-col items-center">

        <div className="flex  text-center h-16 w-full font-semibold">
          <div className="w-1/6 rounded-l-lg">number</div>
          <div className="w-1/6">name</div>
          <div className="w-1/6">assortment</div>
          <div className="w-1/6">amount</div>
          <div className="w-1/6">description</div>
          <div className="w-1/6 rounded-r-lg">edit</div>
        </div>
        
        <div className="flex bg-indigo-200 text-center items-center h-16 w-full rounded-lg mb-4">
          <div className="w-1/6 rounded-l-lg">1</div>
          <div className="w-1/6">sperco</div>
          <div className="w-1/6">hot drink</div>
          <div className="w-1/6">4 $</div>
          <div className="w-1/6">
            <button className="hoverScale w-40 bg-fuchsia-200 py-2 rounded-lg">show description</button>
          </div>
          <div className="w-1/6 rounded-r-lg">
            <button className="mr-4 hoverScale">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
              </svg>
            </button>
            <button className="hoverScale">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex bg-indigo-200 text-center items-center h-16 w-full rounded-lg">
          <div className="w-1/6 rounded-l-lg">1</div>
          <div className="w-1/6">sperco</div>
          <div className="w-1/6">hot drink</div>
          <div className="w-1/6">4 $</div>
          <div className="w-1/6">
            <button className="hoverScale w-40 bg-fuchsia-200 py-2 rounded-lg">show description</button>
          </div>
          <div className="w-1/6 rounded-r-lg">
            <button className="mr-4 hoverScale">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
              </svg>
            </button>
            <button className="hoverScale">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          </div>
        </div>




      </div>
    </div>
  </div>
  
  )
}
