import React, { Component } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScrollToTop from './ScrollToTop';


class Experience extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <>
      <ScrollToTop />
      <div className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{ backdropFilter: "blur(20px)" }}>
        <div className="p-4">
          <h3 className="text-2xl font-extrabold  text-white">Experience Details</h3>
        </div>
        <div>
          <div className="">
            <div className='w-[100%]'>
              <h5 className='text-white'>
                <CheckCircleIcon />
                <span className="pl-3">Experience 1</span>
              </h5>
              <div className='flex flex-col' />
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="institute1"
                  placeholder="Institue/Organisation*"
                  style={{ width: '90%' }}
                  required
                  value={values.institute1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="position1"
                  placeholder="Position*"
                  style={{ width: '90%' }}
                  required
                  value={values.position1}
                  onChange={this.props.handleChange}

                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="duration1"
                  placeholder="Duration*"
                  style={{ width: '90%' }}
                  required
                  value={values.duration1}
                  onChange={this.props.handleChange}
                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder='Description*'
                  style={{ width: '90%' }}
                  name="experienceDescription1"
                  required
                  value={values.experienceDescription1}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className='w-[100%]'>
              <h5 className='text-white'>
                <CheckCircleIcon />
                <span className="pl-3">Experience 2</span>
              </h5>
              <div className='flex flex-col' />
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="institute2"
                  placeholder="Institue/Organisation*"
                  style={{ width: '90%' }}
                  required
                  value={values.institute2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="position2"
                  placeholder="Position*"
                  style={{ width: '90%' }}
                  required
                  value={values.position2}
                  onChange={this.props.handleChange}

                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="duration2"
                  placeholder="Duration*"
                  style={{ width: '90%' }}
                  required
                  value={values.duration2}
                  onChange={this.props.handleChange}
                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder='Description*'
                  style={{ width: '90%' }}
                  name="experienceDescription2"
                  required
                  value={values.experienceDescription2}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
          </div>
        </div>
        <div className="m-3 mt-5 flex justify-between">
                <button
                  className='bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full'
                  onClick={this.back}
                >
                  Back
                </button>
                <button
                  onClick={this.continue}
                  className = "bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full"
                >
                  Next
                </button>
          </div>

          <p className="text-center text-white opacity-[0.2]">Page 4</p>
      </div>
      </>
    );
  }
}

export default Experience;
