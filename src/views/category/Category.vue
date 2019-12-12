<template>
  <div class="wrapper">
    <ul>
      <li>列表属性1</li>
      <li>列表属性2</li>
      <li>列表属性3</li>
      <li>列表属性4</li>
      <li>列表属性5</li>
      <li>列表属性6</li>
      <li>列表属性7</li>
      <li>列表属性8</li>
      <li>列表属性9</li>
      <li>列表属性10</li>
      <li>列表属性11</li>
      <li>列表属性12</li>
      <li>列表属性13</li>
      <li>列表属性14</li>
      <li>列表属性15</li>
      <li>列表属性16</li>
      <li>列表属性17</li>
      <li>列表属性18</li>
      <li>列表属性19</li>
      <li>列表属性20</li>
      <li>列表属性21</li>
      <li>列表属性22</li>
      <li>列表属性23</li>
      <li>列表属性24</li>
      <li>列表属性25</li>
      <li>列表属性26</li>
      <li>列表属性27</li>
      <li>列表属性28</li>
      <li>列表属性29</li>
      <li>列表属性30</li>
      <li>列表属性31</li>
      <li>列表属性32</li>
      <li>列表属性33</li>
      <li>列表属性34</li>
      <li>列表属性35</li>
      <li>列表属性36</li>
      <li>列表属性37</li>
      <li>列表属性38</li>
      <li>列表属性39</li>
      <li>列表属性40</li>
      <li>列表属性41</li>
      <li>列表属性42</li>
      <li>列表属性43</li>
      <li>列表属性44</li>
      <li>列表属性45</li>
      <li>列表属性46</li>
      <li>列表属性47</li>
      <li>列表属性48</li>
      <li>列表属性49</li>
      <li>列表属性50</li>
      <li>列表属性51</li>
      <li>列表属性52</li>
      <li>列表属性53</li>
      <li>列表属性54</li>
      <li>列表属性55</li>
      <li>列表属性56</li>
      <li>列表属性57</li>
      <li>列表属性58</li>
      <li>列表属性59</li>
      <li>列表属性60</li>
      <li>列表属性61</li>
      <li>列表属性62</li>
      <li>列表属性63</li>
      <li>列表属性64</li>
      <li>列表属性65</li>
      <li>列表属性66</li>
      <li>列表属性67</li>
      <li>列表属性68</li>
      <li>列表属性69</li>
      <li>列表属性70</li>
      <li>列表属性71</li>
      <li>列表属性72</li>
      <li>列表属性73</li>
      <li>列表属性74</li>
      <li>列表属性75</li>
      <li>列表属性76</li>
      <li>列表属性77</li>
      <li>列表属性78</li>
      <li>列表属性79</li>
      <li>列表属性80</li>
      <li>列表属性81</li>
      <li>列表属性82</li>
      <li>列表属性83</li>
      <li>列表属性84</li>
      <li>列表属性85</li>
      <li>列表属性86</li>
      <li>列表属性87</li>
      <li>列表属性88</li>
      <li>列表属性89</li>
      <li>列表属性90</li>
      <li>列表属性91</li>
      <li>列表属性92</li>
      <li>列表属性93</li>
      <li>列表属性94</li>
      <li>列表属性95</li>
      <li>列表属性96</li>
      <li>列表属性97</li>
      <li>列表属性98</li>
      <li>列表属性99</li>
      <li>列表属性100</li>
    </ul>
  </div>
</template>

<script>
  import Bs from 'better-scroll'
    export default {
        name: "Category",
      data(){
          return {
            scroll:null
          }
      },
      mounted() {
      this.scroll = new Bs(".wrapper",{

      })
      }
    }


</script>

<style scoped>
div{
  height: 150px;
  background-color: red;
  /*overflow: scroll;*/
}
</style>
