import Loader from 'react-loader-spinner'

// Exact structure required by the spec - data-testid="loader" on the
// wrapping container, not on the Loader component itself.
const LoaderComponent = () => (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
  </div>
)

export default LoaderComponent
