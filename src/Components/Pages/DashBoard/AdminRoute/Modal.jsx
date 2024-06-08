import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ isModal, closeModal, handleModal, person }) => {
  return (
    <Transition appear show={isModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => closeModal(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Requested Trainer Details!
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Name :</span> {person.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Email :</span> {person.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    {" "}
                    <span className="font-medium"> Phone :</span>{" "}
                    {person.number}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Age :</span> {person.age}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium"> Skill :</span>
                    {person.isChecked.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </p>
                  <input
                    type="text"
                    placeholder="Admin Comment"
                    className="border p-2 mt-3 rounded"
                  />
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    onClick={() => {
                      handleModal(person?.status);
                      closeModal(false);
                    }}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-pink-300 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Reject
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
