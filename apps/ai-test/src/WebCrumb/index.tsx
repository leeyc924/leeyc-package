function WebCrumb() {
  return (
    <div id='webcrumbs'>
      <div className='w-[400px] bg-white rounded-lg shadow p-4'>
        <div className='flex justify-between items-center mb-4'>
          <button className='p-2 text-neutral-500'>
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
          <div className='flex items-center gap-2'>
            <div className='bg-neutral-100 p-2 rounded-full text-neutral-900'>April</div>
            <div className='bg-neutral-100 p-2 rounded-full text-neutral-900'>2021</div>
          </div>
          <button className='p-2 text-neutral-500'>
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
        <div className='grid grid-cols-7 text-center text-neutral-500 mb-2'>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div className='grid grid-cols-7 text-center gap-2'>
          <div className='text-neutral-300'>29</div>
          <div className='text-neutral-300'>30</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>31</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>1</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>2</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>3</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>4</div>

          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>5</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>6</div>
          <div className='border-primary-500 border-2 p-2 rounded-full'>7</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>8</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>9</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>10</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>11</div>

          <div className='bg-primary-500 text-neutral-50 p-2 rounded-full'>12</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>13</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>14</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>15</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>16</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>17</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>18</div>

          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>19</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>20</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>21</div>
          <div className='bg-primary-100 text-neutral-900 p-2 rounded-full'>22</div>
          <div className='bg-primary-500 text-neutral-50 p-2 rounded-full'>23</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>24</div>
          <div className='bg-neutral-100 text-neutral-900 p-2 rounded-full'>25</div>

          <div className='text-neutral-300'>26</div>
          <div className='text-neutral-300'>27</div>
          <div className='text-neutral-300'>28</div>
          <div className='text-neutral-300'>29</div>
          <div className='text-neutral-300'>30</div>
          <div className='text-neutral-300'>1</div>
          <div className='text-neutral-300'>2</div>
        </div>
      </div>
    </div>
  );
}

export default WebCrumb;
