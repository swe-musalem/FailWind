import Modal from "../components/Modal";
import Button from '../components/Button'
import { useState } from "react";


export default function ModalPage(){

    const [showModal, setShowModal] = useState(false);


    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <Button onClick={handleClose} primary className={'rounded-md'}>Lorem Ipusem</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
        Tristique aliquam porttitor ipsum lobortis facilisi justo luctus sollicitudin tincidunt egestas leo metus vulputate
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary className="rounded-md">Open Modal</Button>
          { showModal && modal }
          <div className="text-slate-400">
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          Sed urna vitae pede ex habitant suscipit at iaculis mattis class pretium ridiculus diam consectetur suspendisse rutrum imperdiet 
          ut finibus fringilla id ornare faucibus est etiam magnis auctor justo montes si semper hendrerit quisque purus per porttitor bibendum 
          nunc lorem viverra lacinia natoque consectetuer dictumst quis sodales blandit porta vestibulum himenaeos convallis nec tortor torquent a
           nisi euismod ultricies tincidunt libero ipsum fermentum enim elementum leo aptent mollis conubia arcu in vehicula mauris duis gravida 
           fames sociosqu sapien eu placerat eleifend volutpat scelerisque hac lectus tempus efficitur taciti proin augue pulvinar lobortis magna
            luctus inceptos nostra donec ac interdum
          </div>
        </div>
        
    )
}