import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCheck } from "@fortawesome/free-solid-svg-icons";
import { MultiSelect } from "react-multi-select-component";
import './style.css'

const options = [
  { label: "김밥", value: "grapes" },
  { label: "라면", value: "mango" },
  { label: "떡볶이", value: "strawberry" },
  { label: "라볶이", value: "watermelon" },
  { label: "돈까스", value: "pear" },
];

const price = [
  { label: "가성비가 좋아요", value: "grapes" },
  { label: "비싸요", value: "mango" },
  { label: "가격이 착해요", value: "strawberry" },
];

const service = [
  { label: "음식이 빠르게 나와요", value: "grapes" },
  { label: "위생적이에요", value: "mango" },
  { label: "친절해요", value: "strawberry" },
  { label: "위생이 별로예요", value: "watermelon" },
];

const favor = [
  { label: "맛있어요", value: "grapes" },
  { label: "기대와 달랐어요", value: "mango" },
  { label: "싱거워요", value: "strawberry" },
  { label: "매웠어요", value: "watermelon" },
  { label: "별로예요", value: "pear"},

];

const mood = [
  { label: "붐벼요", value: "grapes" },
  { label: "한적해요", value: "mango" },
  { label: "데이트하기 좋아요", value: "strawberry" },
  { label: "인테리어가 예뻐요", value: "watermelon" },
  { label: "아이와 함께하기 좋아요", value: "pear" },

];

const SelectContainer = ({ label, id, setSelect, select }) => {
  const [isClicked, setisClicked] = useState(false);
  console.log(select);
  const onClick = () => {
    setisClicked(!isClicked);
    if (isClicked) {
      const filtered = select.filter((item) => item != id);
      setSelect(filtered);
    } else {
      setSelect([...select, id]);
    }
  };

  return (
    <>
      <SelectBox onClick={onClick} isClicked={isClicked}>
        {label}
      </SelectBox>
    </>
  );
};

const Detail = () => {
  const maxItem = 5;
  let availableItem = 4;
  const [selected, setSelected] = useState([]);

  const [select, setSelect] = useState([]);
  const [select1, setSelect1] = useState([]);
  const [select2, setSelect2] = useState([]);
  const [select3, setSelect3] = useState([]);
  const [select4, setSelect4] = useState([]);
  console.log(selected);

  return (
    <>
      <MainBox>
        <img
          src="/img/textcraft_logo.png"
          style={{ width: "150px", marginTop: "30px" }}
        ></img>

        <BigTitles>
          키워드를 선택해
          <br />
          <SmallTitle>
            <SmallTitle1>나만의 리뷰</SmallTitle1>
            <SmallTitle2>를 생성해 보세요</SmallTitle2>
          </SmallTitle>
        </BigTitles>
        <BigBox>
          <LeftBox>
            <Title>
              <Icon>장소</Icon>
              <TitleText>
                <InputSearch></InputSearch>
              </TitleText>
            </Title>
            <Title>
              <Icon>메뉴</Icon>
              <TitleText>
                <Input>
                  <MultiSelect
                    options={options}
                    value={select}
                    onChange={setSelect}
                    labelledBy={"Select"}
                    isCreatable={true}
                  />
                </Input>
              </TitleText>
            </Title>
            <Title>
              <Icon>가격</Icon>
              <TitleText>
                <Input>
                  <MultiSelect
                    options={price}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                    isCreatable={true}
                  />
                </Input>

                <SmallBox>
                  <XSmaillBox>
                    {selected.map((item) => (
                      <SelectContainer {...item} />
                    ))}
                  </XSmaillBox>
                </SmallBox>
              </TitleText>
            </Title>
            <Title>
              <Icon>서비스</Icon>
              <TitleText>
                <Input>
                  <MultiSelect
                    options={service}
                    value={select1}
                    onChange={setSelect1}
                    labelledBy={"Select"}
                    isCreatable={true}
                  />
                </Input>

                <SmallBox>
                  <XSmaillBox>
                    {select1.map((item) => (
                      <SelectContainer {...item} />
                    ))}
                  </XSmaillBox>
                </SmallBox>
              </TitleText>
            </Title>

            <Title>
              <Icon>맛</Icon>
              <TitleText>
                <Input>
                  <MultiSelect
                    options={favor}
                    value={select2}
                    onChange={setSelect2}
                    labelledBy={"Select"}
                    isCreatable={true}
                  />
                </Input>

                <SmallBox>
                  <XSmaillBox>
                    {select2.map((item) => (
                      <SelectContainer {...item} />
                    ))}
                  </XSmaillBox>
                </SmallBox>
              </TitleText>
            </Title>

            <Title>
              <Icon>분위기</Icon>
              <TitleText>
                <Input>
                  <MultiSelect
                    options={mood}
                    value={select3}
                    onChange={setSelect3}
                    labelledBy={"Select"}
                    isCreatable={true}
                
                  />
                </Input>

                <SmallBox>
                  <XSmaillBox>
                    {select3.map((item) => (
                      <SelectContainer {...item} />
                    ))}
                  </XSmaillBox>
                </SmallBox>
              </TitleText>
            </Title>

            <Title>
              <Icon>글자수</Icon>
              <TitleText>
                <InputText></InputText>
                <Texts>자</Texts>
              </TitleText>
            </Title>
          </LeftBox>
        </BigBox>
      </MainBox>
    </>
  );
};

const MainBox = styled.div`
  width: 390px;
 height: auto;
 margin: 0 auto;
`;



const StyledSelect = styled(MultiSelect)`
  height: 30px;
  width: 150px;
  &.multi-select {
    --rmsc-height: 35px !important; /* Height */
  }
`;

const ProgressBar = styled.div`
  width: 60%;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;

  overflow: hidden;
  margin: 2% auto;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 30px;
  padding: 0;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: #111;
`;

const BigTitles = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 5%;
  margin-top: 60px;
`;

const SmallTitle = styled.div`
  font-size: 1.3rem;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
`;
const SmallTitle1 = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: #707E6C
`;
const SmallTitle2 = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 5px;
`;

const BigBox = styled.div`
  width: 390px;

  margin: 0 auto;
  display: flex;

`;

const LeftBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Input = styled.div`
  background-color: #f6f5f5;
  height: 30px;
  border-radius: 60px;

`;



const InputSearch = styled.div`
  background-color: #f6f5f5;
  height: 30px;
  border-radius: 60px;
  margin-top: 5px;
`;

const InputText = styled.input`
  background-color: #f6f5f5;
  height: 30px;
  width: 70px;
  border-radius: 60px;
  border: none;
  text-align: center;
  float: left;
  margin-top: 5px;
  &:focus {outline: none;}
`;


const Texts = styled.div`
  float: left;
  margin-top: 10px;
  margin-left: 5px;
`;

const Icon = styled.div`
  background-color: #dbeff0;
  height: 40px;
  width: 70px;
  font-size: 15px;
  border-radius: 60px;
  margin-right: 10px;
  line-height: 40px;
`;

const TitleText = styled.div`
  font-size: 15px;
  width: 220px;
`;

const SmallBox = styled.div`
  width: auto%;
  margin-top: 3%;
`;
const XSmaillBox = styled.div``;
const SelectBox = styled.button`
  height: 35px;
  font-size: 12px;
  margin: 15px 5px 0 5px;

  padding: 0 15px;

  border-radius: 60px;
  display: inline-block;
  float: left;

  background-color: #d3e4cf;
  border: none;
`;

export default Detail;
