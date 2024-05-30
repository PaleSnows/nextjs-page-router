import {useRouter} from 'next/router'

const PortfolioProductPage = () => {
    const router = useRouter()
    // console.log(router.pathname);
    console.log(router.query);
  return (
    <div>PortfolioProductPage {router.query.projectid}</div>
  )
}

export default PortfolioProductPage