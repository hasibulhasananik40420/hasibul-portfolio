import loadingcss from '@/style/loading.module.css'
const loading = () => {
  return (
    <div className={`${loadingcss.spinner} flex justify-center items-center h-[100vh]`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default loading