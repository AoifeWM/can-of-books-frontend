import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class UpdateBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
      _id: '',
      title: '',
      description: '',
      status: '',
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleUpdate(this.state);
    this.handleClose();
  };
  componentDidMount = () => {
      console.log("Component did mount");
      this.setState({
        _id: this.props.book?._id,
        title: this.props.book?.title,
        description: this.props.book?.description,
        status: this.props.book?.status,
      })
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  handleStatusChange = event => {
    this.setState({ status: event.target.value });
  };
  handleClose = () => {
    this.props.onClose();
  }
  render() {
      console.log(this.state);
      console.log(this.props);
    return (
        <Modal show={this.props.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update a Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleSubmit} className="p-4">
                    <Form.Label>
                        <h2>
                            Update a book
                        </h2>
                    </Form.Label>
                    <Form.Group className="mb-3">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" placeholder={this.state.title} onChange={event => this.handleTitleChange(event)} value={this.state.title} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Book Description</Form.Label>
                        <Form.Control type="text" placeholder={this.state.description} onChange={event => this.handleDescriptionChange(event)} value={this.state.description} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control defaultValue='' onChange={event => this.handleStatusChange(event)} as="select">
                            <option></option>
                            <option value="LIFE-CHANGING">Life Changing</option>
                            <option value="FAVORITE FIVE">Favorite Five</option>
                            <option value="RECCOMENDED TO ME">Reccomended To Me</option>
                        </Form.Control>
                        {/* <Form.Check type="checkbox" label="Status" onChange={this.handleBookChange} checked={this.state.status} /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
  }
}
export default UpdateBookForm;