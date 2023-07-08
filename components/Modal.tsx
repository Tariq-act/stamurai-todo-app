function Modal() {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <form className='flex flex-col gap-4 w-2/4  bg-white p-4 rounded-md'>
        <h1 className="text-center font-medium text-lg ">Add Todo</h1>
        <input
          type='text'
          placeholder='Enter title'
          className='border-2 outline-none p-2 rounded-md'
        />

        <textarea
          rows={3}
          placeholder='Enter description'
          className='border-2 outline-none p-2 rounded-md resize-none'
        ></textarea>

        <select name='' id='' className='border-2 outline-none p-2 rounded-md'>
          <option value='1'>Todo</option>
          <option value='1'>progress</option>
          <option value='1'>completed</option>
        </select>


        <button type="submit" className="bg-black text-white p-2 rounded-md" >Add Todo</button>

      </form>
    </div>
  );
}

export default Modal;
