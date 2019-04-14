mkdir -p modules/client/components/ui/$1
sed -e "s/GenComponent/$1/g" bash/gen_ui_component/GenComponent.tsx > modules/client/components/ui/$1/$1.tsx
sed -e "s/GenComponent/$1/g" bash/gen_ui_component/GenComponent.scss > modules/client/components/ui/$1/$1.scss
sed -e "s/GenComponent/$1/g" bash/gen_ui_component/GenComponent.d.ts > modules/client/components/ui/$1/$1.d.ts
sed -e "s/GenComponent/$1/g" bash/gen_ui_component/GenComponent.spec.tsx > modules/client/components/ui/$1/$1.spec.tsx
sed -e "s/GenComponent/$1/g" bash/gen_ui_component/GenComponent.stories.tsx > modules/client/components/ui/$1/$1.stories.tsx