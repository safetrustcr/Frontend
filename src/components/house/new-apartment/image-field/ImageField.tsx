'use client';

import useNewApartment from '@/hooks/house/new-apartment/useNewApartment';
import { TiPlus } from 'react-icons/ti';
import { FaRegTrashAlt } from 'react-icons/fa';

const ImageField = () => {
  const {
    image1,
    image2,
    image3,
    image4,
    setImage1,
    setImage2,
    setImage3,
    setImage4,
    dropzone1,
    dropzone2,
    dropzone3,
    dropzone4,
    isDragging1,
    isDragging2,
    isDragging3,
    isDragging4,
  } = useNewApartment();

  const getDropzoneClass = (isDragging: boolean) =>
    isDragging ? 'bg-blue-100 border-blue-500' : 'bg-gray-200 border-gray-300';

  return (
    <div>
      <label className="font-bold">Images</label>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="md:col-span-2 relative w-full"
          style={{ height: '340px' }}
        >
          <div
            {...dropzone1.getRootProps()}
            className={`relative flex items-center justify-center border-dashed border-2 rounded-lg text-center cursor-pointer bg-light-secondary dark:bg-dark-surface ${getDropzoneClass(
              isDragging1
            )}`}
            style={{ width: '100%', height: '100%' }}
          >
            <input {...dropzone1.getInputProps()} />
            {image1 ? (
              <img
                src={URL.createObjectURL(image1)}
                alt="Preview Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <TiPlus className="text-4xl text-gray-400" />
              </div>
            )}
          </div>
          {image1 && (
            <button
              type="button"
              onClick={() => setImage1(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              <FaRegTrashAlt />
            </button>
          )}
        </div>

        <div className="md:col-span-1 grid gap-5">
          {[dropzone2, dropzone3, dropzone4].map((dropzone, index) => {
            const image = [image2, image3, image4][index];
            const setImage = [setImage2, setImage3, setImage4][index];
            const isDragging = [isDragging2, isDragging3, isDragging4][index];

            return (
              <div
                key={index}
                className="relative"
                style={{ width: '100%', height: '100px' }}
              >
                <div
                  {...dropzone.getRootProps()}
                  className={`relative flex items-center justify-center border-dashed border-2 rounded-lg text-center cursor-pointer bg-light-secondary dark:bg-dark-surface ${getDropzoneClass(
                    isDragging
                  )}`}
                  style={{ width: '100%', height: '100%' }}
                >
                  <input {...dropzone.getInputProps()} />
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview Image ${index + 2}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <TiPlus className="text-4xl text-gray-400" />
                    </div>
                  )}
                </div>
                {image && (
                  <button
                    type="button"
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                  >
                    <FaRegTrashAlt />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageField;
