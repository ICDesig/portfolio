const Input = ({ label, type = 'text', textarea = false, ...props }) => {
  const Component = textarea ? 'textarea' : 'input'
  
  return (
    <div className="relative">
      <Component
        type={type}
        placeholder=" "
        className={`
          peer w-full px-4 py-3 bg-transparent border-b-2 border-dark-border
          text-white placeholder-transparent
          focus:border-accent-blue focus:outline-none
          transition-colors duration-300
          ${textarea ? 'resize-none h-32' : ''}
        `}
        {...props}
      />
      <label className="
        absolute left-0 -top-5 text-gray-400 text-sm
        peer-placeholder-shown:text-base peer-placeholder-shown:top-3
        peer-focus:-top-5 peer-focus:text-sm peer-focus:text-accent-blue
        transition-all duration-300
      ">
        {label}
      </label>
    </div>
  )
}

export default Input