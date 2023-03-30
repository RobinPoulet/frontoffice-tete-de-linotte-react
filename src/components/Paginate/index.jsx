import Pagination from 'react-bootstrap/Pagination'
import '../../paginate.css'

const Paginate = ({ currentPage, onPageChange, totalPages }) => {
  const handlePageClick = (page) => {
    onPageChange(page)
  }
  console.log(currentPage, totalPages)

  const renderPageNumbers = () => {
    const pageNumbers = []
    let startPage, endPage
    if (totalPages <= 7) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 4) {
        startPage = 1
        endPage = 7
      } else if (currentPage >= totalPages - 3) {
        startPage = totalPages - 6
        endPage = totalPages
      } else {
        startPage = currentPage - 3
        endPage = currentPage + 3
      }
    }
    console.log(startPage, endPage)
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          value={i}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Pagination.Item>
      )
    }
    console.log(pageNumbers, totalPages, currentPage)
    if (totalPages > 7) {
      if (currentPage > 4) {
        pageNumbers.unshift(
          <Pagination.Item
            key="first-page"
            value={1}
            onClick={() => handlePageClick(1)}
          >
            1
          </Pagination.Item>,
          <Pagination.Ellipsis key="start-ellipsis" />
        )
      }
      if (currentPage < totalPages - 3) {
        pageNumbers.push(
          <Pagination.Ellipsis key="end-ellipsis" />,
          <Pagination.Item
            key="last-page"
            value={totalPages}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </Pagination.Item>
        )
      }
    }
    return pageNumbers
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {renderPageNumbers()}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  )
}

export default Paginate
