import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FigureContext } from '../context/FigureContext';
import Footer from '../components/Footer';
import Title from '../components/Title';

const Biography = () => {
    const { figures } = useContext(FigureContext); 
    const { id } = useParams();
    const figure = figures.find(figure => figure._id === id);

    if (!figure) {
        return <div>Figure not found</div>;
    }

    return (
        <div className='page-container container mx-auto p-4 pt-16'>
            {/* Header Section */}
            <Title 
                title1={'Study '} 
                title2={figure.name}
                titleStyles={'pb-10'} 
                paraStyles={'!block'}
            />

            <div className='flex flex-col md:flex-row'>
                {/* Image Section */}
                <div className='md:w-1/2 p-4'>
                    <img
                        src={figure.image}
                        alt={figure.name}
                        className='rounded-lg shadow-lg w-full h-auto max-w-md mx-auto'
                    />
                </div>

                {/* Details Section */}
                <div className='md:w-1/2 p-4'>
                    <h2 className='text-2xl font-bold'>{figure.name}</h2>
                    <p><strong>Born:</strong> {figure.birthYear}</p>
                    <p><strong>Died:</strong> {figure.deathYear || 'N/A'}</p>
                    <p>{figure.description}</p>

                    {/* Buttons Section */}
                    <div className='flex space-x-4 mt-4'>
                        <Link to={`/quiz/${figure._id}`} className='mt-6 btn-secondaryOne px-4 py-2 rounded hover:bg-red-100'>
                            Take Quiz
                        </Link>
                        <Link to={`/chat/${figure._id}`} className='mt-6 btn-secondaryOne px-4 py-2 rounded hover:bg-red-100'>
                            Chat with {figure.name}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Biography;
