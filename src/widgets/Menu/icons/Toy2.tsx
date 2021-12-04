import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 55" {...props}>
      <g fill="none" fill-rule="evenodd"><g fill="rgb(0,0,0)" fill-rule="nonzero" transform="translate(-1)"><circle  cx="52" cy="10" r="1"/><path  d="m7 34c2.03388665.1443204 4.022389-.6477664 5.4-2.151.2133645.3751101.4505158.7361813.71 1.081.2679598.3720868.2357194.8816529-.077 1.217-1.7781698 2.0494481-3.23876299 4.3541043-4.333 6.837-.23270079-.1849136-.45441109-.3832509-.664-.594-1.4326048-1.656901-3.93001803-1.8568544-5.608-.449-1.68933356 1.4232925-1.90512457 3.946525-.482 5.636.319.385 8.166 9.423 29.054 9.423s28.735-9.038 29.059-9.422c1.2682988-1.5112505 1.2409365-3.722757-.0643648-5.2021651-1.3053012-1.4794082-3.4961771-1.7820182-5.1536352-.7118349-1.4077184-3.1406845-3.3651262-6.0046633-5.78-8.457-.2760791-.2962524-.3520787-.727178-.194-1.1 1.5-4 .819-9.459.378-11.975.8196192.2326796 1.5646585.6744652 2.162 1.282.9356776.9902983 2.2307936 1.5619805 3.593 1.586 2.281 0 5-1.041 5-6 0-1.926-3.248-7.436-4.751-9.884 1.0214794-1.14143821 1.6370693-2.58847873 1.751-4.116 0-.55228475-.4477153-1-1-1-1.7054069-.00852592-3.397633.29899744-4.991.907-1.2670174-.5529358-2.6273606-.86070114-4.009-.907-10.332 0-13.092 11.284-13.8 16.14-.0668644.4947897-.4907218.8629891-.99.86h-13.21c-.8506512.0003516-1.696078.1329345-2.506.393-.9241284-2.7629011-3.5856286-4.5633277-6.494-4.393-2.1564262-.1131107-4.20236937.9608752-5.334 2.8-1.30991467 2.3392482-1.5171473 5.1383533-.566 7.645.66302939 1.2510668.8136404 2.7109179.42 4.071-.55873037 1.2257695-1.61360536 2.1551508-2.9 2.555-.25972737.1038589-.46408197.3117542-.5634645.5732272-.09938252.2614729-.08470705.5526187.0404645.8027728.139.261 1.415 2.553 5.903 2.553zm51.3 7.5c.4015245.3381775.6518922.8222972.6957985 1.3454208.0439064.5231235-.1222616 1.0422035-.4617985 1.4425792-.305.357-7.567 8.712-27.534 8.712s-27.229-8.355-27.529-8.711c-.50052127-.5937815-.61206173-1.423627-.28609378-2.1284979s1.03050642-1.1573202 1.80709378-1.1605021c.59326605.0009727 1.15650866.2610433 1.542.712.271.301 6.838 7.288 24.466 7.288 17.748 0 24.209-7 24.479-7.3.7282878-.8251367 1.9835828-.9141331 2.821-.2zm-25.026-5.592c2.8565717-.6822087 5.7901705-.9874697 8.726-.908.529521.0020445 1.0580992-.0448212 1.579-.14.3167184-.0705762.6480392.0157906.89.232 2.3381791 2.2897493 4.1622534 5.0509157 5.351 8.1-3.558 1.802-9.584 3.808-18.82 3.808-7.877 0-13.421-1.459-17.087-3.006 1.0476084-2.6340904 2.6432068-5.0153873 4.681-6.986.2209739-.2107629.5298682-.3023147.83-.246.8493697.1594644 1.7117915.2391447 2.576.238 3.7894778.1271971 7.5793776-.2398928 11.274-1.092zm21.726-16.908c-.6890961.0038479-1.3530149-.2587816-1.853-.733l4.494-4.493c.182758.3874867.303884.8011368.359 1.226 0 3.516-1.442 4-3 4zm-1.848-13.47c1.3 2.072 2.646 4.436 3.592 6.312l-5.169 5.169c-1.0586434-.698153-2.3075155-1.0513305-3.575-1.011-.3053703-.0001035-.5940514.1393278-.7838151.3785782-.1897638.2392504-.2598094.5520946-.1901849.8494218.017.074 1.718 7.5-.032 12.182-.4330331 1.1095237-.1742225 2.369904.661 3.219 2.3731578 2.424429 4.2724152 5.270941 5.6 8.393-.5356315.4275448-1.096658.822267-1.68 1.182-1.2963132-3.2302896-3.2546684-6.153345-5.749-8.581-.7074647-.6504782-1.6852882-.9196962-2.626-.723-.3961279.0697467-.7977916.1032186-1.2.1-3.0826337-.0825349-6.1628073.2388629-9.162.956-1.592045.3804323-3.2086071.6497479-4.838.806v-5.762c3.3123376-.0033074 5.9966926-2.6876624 6-6v-4h2c3.027 0 4.115-3.338 4.97-6.757.469-1.877 1.899-6.243 5.03-6.243 2.982 0 5.047-2.4 5.649-3.193.9959025-.39497708 2.0431688-.64551281 3.11-.744-.319289.84181069-.8197721 1.60311864-1.466 2.23-.3292493.329225-.3877123.84212375-.141 1.237zm-6.152-3.53c.7916235.01984333 1.5756097.16011785 2.325.416-.8644529.93450385-2.0546571 1.50150637-3.325 1.584-3.2 0-5.738 2.828-6.97 7.757-1.092 4.366-1.968 5.243-3.03 5.243h-.963c.0659135-.1870042.113798-.3798816.143-.576.632-4.337 3.049-14.424 11.82-14.424zm-15 17v4c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-4zm-12 0v4c.0033074 3.3123376 2.6876624 5.9966926 6 6v5.907c-1.132.059-2.445.093-4 .093-.7379722.0022334-1.4745285-.0647263-2.2-.2-.9220924-.1778852-1.8736406.0960566-2.56.737-2.2306688 2.1471034-3.9822888 4.7414776-5.14 7.613-.669-.342-1.249-.676-1.744-.987 1.0333812-2.4340925 2.4414255-4.6914173 4.173-6.69.9486249-1.0532624 1.017395-2.6312015.164-3.763-2.0307319-2.7040322-2.4201575-6.3020945-1.015-9.378.9447327-2.077917 3.040133-3.3898061 5.322-3.332zm-13.607 9.229c.60389333-1.8822002.4236466-3.9283611-.5-5.676-.64616244-1.8844867-.47503015-3.9533021.472-5.706.77912316-1.2380413 2.17566822-1.9476476 3.635-1.847 2.1384925-.1903888 4.1061634 1.1786821 4.671 3.25-1.2017137.7948032-2.1652735 1.9007542-2.788 3.2-1.1960706 2.5894723-1.3531987 5.5391132-.439 8.241-.758 1.526-2.244 2.309-4.444 2.309-1.14128338.0559567-2.2766978-.1950914-3.288-.727 1.21810805-.6749492 2.16530854-1.7503981 2.681-3.044z"/></g></g>
    </Svg>
  );
};

export default Icon;
