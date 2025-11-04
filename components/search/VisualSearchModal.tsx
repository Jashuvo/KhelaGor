import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface VisualSearchModalProps {
    onClose: () => void;
    onSearch: (image: string) => void;
}

const VisualSearchModal: React.FC<VisualSearchModalProps> = ({ onClose, onSearch }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles[0]) {
            const currentFile = acceptedFiles[0];
            setFile(currentFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(currentFile);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: 1,
    });
    
    const handleSearch = () => {
        if (preview) {
            // remove data:image/jpeg;base64, part
            const base64Image = preview.split(',')[1];
            onSearch(base64Image);
            onClose();
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg border-2 border-black" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b-2 border-black pb-4">
                    <h2 className="text-2xl font-extrabold text-black">Visual Search</h2>
                    <button onClick={onClose} className="text-3xl font-bold">&times;</button>
                </div>
                <div className="mt-6">
                    <div {...getRootProps()} className={`border-4 border-dashed rounded-lg p-10 text-center cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-black'}`}>
                        <input {...getInputProps()} />
                        {preview ? (
                            <img src={preview} alt="Preview" className="max-h-48 mx-auto" />
                        ) : (
                            <p>Drag 'n' drop an image here, or click to select a file</p>
                        )}
                    </div>
                     <div className="pt-6 flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="bg-gray-200 text-black font-bold py-2 px-5 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-gray-300">
                            Cancel
                        </button>
                        <button onClick={handleSearch} disabled={!preview} className="bg-blue-500 text-white font-bold py-2 px-5 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-blue-600 disabled:bg-gray-400">
                            Search with Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualSearchModal;