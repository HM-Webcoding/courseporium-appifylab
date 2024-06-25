import {Checkbox, Collapse, Rate} from 'antd';
import {CheckboxValueType} from 'antd/lib/checkbox/Group';

const {Panel} = Collapse;

const Sidebar = () => {
  const onChangeCheck = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const onChangePanel = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <div className={`marketplaceSidebar_collapse`}>
        <h5 className="mb-4 text-3xl font-medium text-black">Filters</h5>

        {/* course sidebar */}
        <Collapse
          defaultActiveKey={['1']}
          onChange={onChangePanel}
          expandIconPosition="end">
          <Panel header="Category" key="1">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="web-development"
                    defaultChecked={true}
                    className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Web Development (102)
                    </p>
                  </Checkbox>
                  <Checkbox value="design" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Design (80)
                    </p>
                  </Checkbox>
                  <Checkbox value="marketing" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Marketing (40)
                    </p>
                  </Checkbox>
                  <Checkbox value="video-editing" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Video Editing (20)
                    </p>
                  </Checkbox>
                </div>
              </Checkbox.Group>
              <button className="my-3 bg-white text-center text-lg font-medium text-ezy-primary transition-all duration-300 ease-in-out hover:opacity-80">
                View more
              </button>
            </div>
          </Panel>

          <Panel header="Level" key="2">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="all-levels"
                    defaultChecked={true}
                    className="!ml-0">
                    <p className="text-base font-normal text-black">
                      All Levels (1234)
                    </p>
                  </Checkbox>
                  <Checkbox value="beginner" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Beginner (124)
                    </p>
                  </Checkbox>
                  <Checkbox value="intermediate" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      Intermediate (542)
                    </p>
                  </Checkbox>
                  <Checkbox value="expert" className="!ml-0">
                    <p className="text-base font-normal text-black">Expert</p>
                  </Checkbox>
                </div>
              </Checkbox.Group>
              <button className="my-3 bg-white text-center text-lg font-medium text-ezy-primary transition-all duration-300 ease-in-out hover:opacity-80">
                View more
              </button>
            </div>
          </Panel>

          <Panel header="Video Duration" key="3">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="0-1hour"
                    defaultChecked={true}
                    className="!ml-0">
                    <p className="text-base font-normal text-black">
                      0-1 Hour (451)
                    </p>
                  </Checkbox>
                  <Checkbox value="1-2hours" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      1-2 Hours (124)
                    </p>
                  </Checkbox>
                  <Checkbox value="2-3hours" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      2-3 Hours (52)
                    </p>
                  </Checkbox>
                  <Checkbox value="3-4hours" className="!ml-0">
                    <p className="text-base font-normal text-black">
                      3-4 Hours (40)
                    </p>
                  </Checkbox>
                </div>
              </Checkbox.Group>
              <button className="my-3 bg-white text-center text-lg font-medium text-ezy-primary transition-all duration-300 ease-in-out hover:opacity-80">
                View more
              </button>
            </div>
          </Panel>

          <Panel header="Rating" key="4">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="5star"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="flex items-center gap-x-3 text-base font-normal text-black">
                      <Rate defaultValue={5} disabled className="text-lg" />
                      <p>(150)</p>
                    </div>
                  </Checkbox>
                  <Checkbox
                    value="4star"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="flex items-center gap-x-3 text-base font-normal text-black">
                      <Rate defaultValue={4} disabled className="text-lg" />
                      <p>(80)</p>
                    </div>
                  </Checkbox>
                  <Checkbox
                    value="3star"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="flex items-center gap-x-3 text-base font-normal text-black">
                      <Rate defaultValue={3} disabled className="text-lg" />
                      <p>(55)</p>
                    </div>
                  </Checkbox>
                  <Checkbox
                    value="2star"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="flex items-center gap-x-3 text-base font-normal text-black">
                      <Rate defaultValue={2} disabled className="text-lg" />
                      <p>(20)</p>
                    </div>
                  </Checkbox>
                  <Checkbox
                    value="1star"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="flex items-center gap-x-3 text-base font-normal text-black">
                      <Rate defaultValue={1} disabled className="text-lg" />
                      <p>(05)</p>
                    </div>
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </div>
          </Panel>

          <Panel header="Price" key="5">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="paid"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>Paid (4512)</p>
                    </div>
                  </Checkbox>
                  <Checkbox
                    value="free"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>Free (1452)</p>
                    </div>
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </div>
          </Panel>

          <Panel header="Language" key="6">
            <div>
              <Checkbox.Group onChange={onChangeCheck}>
                <div className="flex flex-col items-start gap-y-4">
                  <Checkbox
                    value="english"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>English (452)</p>
                    </div>
                  </Checkbox>

                  <Checkbox
                    value="espenol"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>Espenol (120)</p>
                    </div>
                  </Checkbox>

                  <Checkbox
                    value="portugues"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>Portugues (45)</p>
                    </div>
                  </Checkbox>

                  <Checkbox
                    value="tukce"
                    defaultChecked={true}
                    className="!ml-0">
                    <div className="text-base font-normal text-black">
                      <p>Tukce (20)</p>
                    </div>
                  </Checkbox>
                </div>
              </Checkbox.Group>
              <button className="my-3 bg-white text-center text-lg font-medium text-ezy-primary transition-all duration-300 ease-in-out hover:opacity-80">
                View more
              </button>
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Sidebar;
